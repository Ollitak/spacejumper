import background from "../img/arizona_background_1900x800.png"
import platformLarge from "../img/platforms/tile1.png"

import Player from "./classes/Player.js"
import Platform from "./classes/Platform"
import Generic from "./classes/Generic"

import imageFactory from "./utilities/imageFactory"
import platformGenerator from "./utilities/platformGenerator"

export const CANVA_WIDTH = 1600
export const CANVA_HEIGHT = 800
export const MENU_WIDTH = 800
export const MENU_HEIGHT = 400

export const HORIZONTAL_MOVEMENT_SPEED = 7
export const PLATFORM_MOVEMENT_SPEED = 6

let animationStopId
let gameStatus = {
  menu: true,
  game: false,
  paused: false
}
let player
let score = 0
let highscore = 0

let background1
let generics

let startingPlatform
let platforms

let keysPressed = {
  right: false,
  left: false
}

function startGame(ctx, canvas) {
  
  function load() {
    score = 0

    player = new Player({x: 120, y: 300})

    background1 = new Generic({ x: 0, y: 0 }, imageFactory(background))
    generics = [background1]

    startingPlatform = new Platform({x: 0, y: 770}, {width: 2000, height: 138}, imageFactory(platformLarge)) 
    platforms = [startingPlatform]

    for(let i = 1; i < 5; i++) {
      platforms[i] = platformGenerator(
        {
          x: platforms[i-1].position.x + platforms[i-1].width,
          y: platforms[i-1].position.y
        }
      )
    }
  }


  function renderScoreboard() {
    ctx.font = "36px 'Press Start 2P'";
    ctx.fillStyle = "white"

    ctx.fillText(score, CANVA_WIDTH/2 - ctx.measureText(score).width/2, 100)  
  }

  
  function collisionDetection(platform) {
    if (player.position.y + player.height <= platform.position.y + 12 &&
      player.position.y + player.height + player.velocity.y >= platform.position.y + 12 &&
      player.position.x + player.width > platform.position.x + 20 &&
      player.position.x < platform.position.x + platform.width - 20) {
        player.setYVelocity(0)
        
        // After landing on platform, set player in walk mode
        if(player.spriteStatus === "jumpRight") {
          player.spriteStatus = "walkRight"
        }
        if(player.spriteStatus === "jumpLeft") {
          player.spriteStatus = "walkRight"
        }
    }
  }


  function dynamicPlatformDeletion(platform) {
    if (platform.position.x + platform.width < -800) {
      const index = platforms.indexOf(platform)
      platforms.splice(index, 1)

      platforms = platforms.concat(platformGenerator(
        {
          x: platforms[platforms.length-1].position.x + platforms[platforms.length-1].width,
          y: platforms[platforms.length-1].position.y
        }
      ))
    }
  }


  function setHorizontalVelocity() {
    if (keysPressed.right && player.position.x < CANVA_WIDTH) {
      player.setXVelocity(HORIZONTAL_MOVEMENT_SPEED)
    } else if (keysPressed.left && player.position.x > 0) {
      player.setXVelocity(-HORIZONTAL_MOVEMENT_SPEED)
    } else {
      player.velocity.x = 0
    }
  }


  function updateSpriteStatus() {
    if(keysPressed.right && player.spriteStatus != "jumpRight" && player.spriteStatus != "jumpLeft") {
      player.setSpriteStatus("runRight")
    } else if(keysPressed.left && player.spriteStatus != "jumpRight" && player.spriteStatus != "jumpLeft") {
      player.setSpriteStatus("runLeft")
    }
  }

  
  function checkLoseCondition() {
    if (player.position.y + player.height + player.velocity.y > (CANVA_HEIGHT + 500)) {
      if (score > highscore) highscore = score
      gameStatus.menu = true
    }
  }

  
  function renderMenu() {
    drawBorder(ctx, CANVA_WIDTH/2-MENU_WIDTH/2, CANVA_HEIGHT/2-MENU_HEIGHT/2, MENU_WIDTH, MENU_HEIGHT)

    ctx.fillStyle="black"
    ctx.fillRect(CANVA_WIDTH/2-MENU_WIDTH/2, CANVA_HEIGHT/2-MENU_HEIGHT/2, MENU_WIDTH, MENU_HEIGHT)
  
    ctx.fillStyle = "white"
    ctx.font = "36px 'Press Start 2P'";

    let menuText = "WELCOME"
    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 280)
    menuText = "TO"
    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 320)
    menuText = "SPACEJUMPER"
    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 360)

    ctx.font = "26px 'Press Start 2P'";
    ctx.fillStyle = "green"
    menuText = "press 'S' to start the game"
    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 440)

    menuText = "press 'R' to pause the game"
    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 480)

    ctx.font = "20px 'Press Start 2P'";

    ctx.fillStyle = "yellow"
    menuText = "last game score " + score
    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 550)
    menuText = "current highscore " + highscore
    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 580)
  }

  function menuPlatformMovement(platforms) {
    platforms.forEach(platform => {
      platform.draw(ctx)
      dynamicPlatformDeletion(platform)
      platform.move(-PLATFORM_MOVEMENT_SPEED)
    })
  }


  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    generics.forEach(generic => {
      generic.draw(ctx)
    })

    if (gameStatus.menu) {
      menuPlatformMovement(platforms)
      renderMenu()
    } else {
      platforms.forEach(platform => {
        platform.draw(ctx)
        
        collisionDetection(platform)
        dynamicPlatformDeletion(platform)
        
        platform.move(-PLATFORM_MOVEMENT_SPEED)
        score += PLATFORM_MOVEMENT_SPEED
      })

      renderScoreboard()
      setHorizontalVelocity()
      updateSpriteStatus()
      checkLoseCondition()

      player.update(ctx)
    }

    animationStopId = window.requestAnimationFrame(animate)
  }


  window.addEventListener("keydown", function({ keyCode }) {
    switch (keyCode){
      case (87):
        if(player.spriteStatus !== "jumpRight" && player.spriteStatus !== "jumpLeft" && player.velocity.y === 1) {
          player.jump();
          if(player.spriteStatus === "walkRight" || player.spriteStatus === "runRight") {
            player.setSpriteStatus("jumpRight")
          } else {
            player.setSpriteStatus("jumpLeft")
          }
        }
        break
      case (68):
        keysPressed.right = true;
        break
      case (65):
        keysPressed.left = true;
        break
      default:
        null
    }
  })


  window.addEventListener("keyup", function({ keyCode }) {
    console.log(keyCode)
    switch(keyCode){
      case (68):
        keysPressed.right = false;
        if(player.spriteStatus != "jumpRight" && player.spriteStatus != "jumpLeft" ) player.setSpriteStatus("walkRight")
        break
      case (65):
        keysPressed.left = false;
        if(player.spriteStatus != "jumpRight" && player.spriteStatus != "jumpLeft") player.setSpriteStatus("walkRight")
        break
      case (82):
        if (gameStatus.paused) window.requestAnimationFrame(animate)
        else window.cancelAnimationFrame(animationStopId)
        gameStatus.paused = !gameStatus.paused
        break
      case (83):
        if(gameStatus.menu) gameStatus.menu = false
        load()
        break
      default:
        null
    }
  })

  
  load()
  window.requestAnimationFrame(animate)
}


function drawBorder(ctx, xPos, yPos, width, height, thickness = 2)
{
  ctx.fillStyle = "white";
  ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
}


const exportObject = {
  startGame,
  CANVA_WIDTH,
  CANVA_HEIGHT
}

export default exportObject
