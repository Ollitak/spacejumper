import platformLarge from "../img/platforms/tile1.png"
import platformSmall from "../img/platforms/tile2.png"

import background from "../img/arizona_background_1900x800.png"

/*
import idleRight1 from "../img/character/idle_right/armor__0000_idle_1.png"
import idleRight2 from "../img/character/idle_right/armor__0001_idle_2.png"
import idleRight3 from "../img/character/idle_right/armor__0002_idle_3.png"

import idleLeft1 from "../img/character/idle_left/armor__0000_idle_1.png"
import idleLeft2 from "../img/character/idle_left/armor__0001_idle_2.png"
import idleLeft3 from "../img/character/idle_left/armor__0002_idle_3.png"
*/

import walkRight1 from "../img/character/walk_right/armor__0006_walk_1.png"
import walkRight2 from "../img/character/walk_right/armor__0007_walk_2.png"
import walkRight3 from "../img/character/walk_right/armor__0008_walk_3.png"
import walkRight4 from "../img/character/walk_right/armor__0009_walk_4.png"
import walkRight5 from "../img/character/walk_right/armor__0010_walk_5.png"
import walkRight6 from "../img/character/walk_right/armor__0011_walk_6.png"

import runRight1 from "../img/character/run_right/armor__0012_run_1.png"
import runRight2 from "../img/character/run_right/armor__0013_run_2.png"
import runRight3 from "../img/character/run_right/armor__0014_run_3.png"
import runRight4 from "../img/character/run_right/armor__0015_run_4.png"
import runRight5 from "../img/character/run_right/armor__0016_run_5.png"
import runRight6 from "../img/character/run_right/armor__0017_run_6.png"

import runLeft1 from "../img/character/run_left/armor__0012_runleft_1.png"
import runLeft2 from "../img/character/run_left/armor__0013_runleft_2.png"
import runLeft3 from "../img/character/run_left/armor__0014_runleft_3.png"
import runLeft4 from "../img/character/run_left/armor__0015_runleft_4.png"
import runLeft5 from "../img/character/run_left/armor__0016_runleft_5.png"
import runLeft6 from "../img/character/run_left/armor__0017_runleft_6.png"

import jumpRight1 from "../img/character/jump_right/armor__0027_jump_1.png"
import jumpRight2 from "../img/character/jump_right/armor__0028_jump_2.png"
import jumpRight3 from "../img/character/jump_right/armor__0029_jump_3.png"
import jumpRight4 from "../img/character/jump_right/armor__0030_jump_4.png"

import jumpLeft1 from "../img/character/jump_left/armor__0027_jump_1.png"
import jumpLeft2 from "../img/character/jump_left/armor__0028_jump_2.png"
import jumpLeft3 from "../img/character/jump_left/armor__0029_jump_3.png"
import jumpLeft4 from "../img/character/jump_left/armor__0030_jump_4.png"

 
const CANVA_WIDTH = 1600
const CANVA_HEIGHT = 800

const GRAVITY = 1
const JUMP_POWER = 25
const HORIZONTAL_MOVEMENT_SPEED = 7
const PLATFORM_MOVEMENT_SPEED = 10


function startGame(ctx, canvas) {
  let player
  let score // scroll offset i.e. how much platforms have scrolled left

  let background1
  let generics

  let startingPlatform
  let platforms

  let keysPressed = {
    right: false,
    left: false
  }

  function load() {
    score = 0

    player = new Player({x: 120, y: 300})

    background1 = new Generic({ x: 0, y: 0 }, imageFactory(background))
    generics = [background1]

    startingPlatform = new Platform({x: 50, y: 500}, {width: 1000, height: 138}, imageFactory(platformLarge))    
    platforms = [startingPlatform]

    // Generate platforms
    for(let i = 1; i < 30; i++) {
      platforms[i] = platformGenerator(
        {
          x: platforms[i-1].position.x + platforms[i-1].width,
          y: platforms[i-1].position.y
        }
      )
    }
  }

  function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    generics.forEach(generic => {
      generic.draw(ctx)
    })
    
    platforms.forEach(platform => {
      platform.draw(ctx)

      // Collision detection between player and platform
      // First 2 number adjust the gap between player and platform => higher the number, smaller the gap
      // Second 2 number adjust where player falls off from platform => higher the number, earlier fall
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

        platform.move(-PLATFORM_MOVEMENT_SPEED)
        score += PLATFORM_MOVEMENT_SPEED
    })


    //Movement logic
    if (keysPressed.right && player.position.x < CANVA_WIDTH) {
      player.setXVelocity(HORIZONTAL_MOVEMENT_SPEED)
    } else if (keysPressed.left && player.position.x > 0) {
      player.setXVelocity(-HORIZONTAL_MOVEMENT_SPEED)
    } else {
      player.velocity.x = 0
    }
    

    // Set sprite status to 'run' when right or left key is pressed AND player is not currently jumping
    if(keysPressed.right && player.spriteStatus != "jumpRight" && player.spriteStatus != "jumpLeft") {
      player.setSpriteStatus("runRight")
    } else if(keysPressed.left && player.spriteStatus != "jumpRight" && player.spriteStatus != "jumpLeft") {
      player.setSpriteStatus("runLeft")
    }    

    // lose
    if (player.position.y + player.height + player.velocity.y > (CANVA_HEIGHT + 500)) {
      console.log("lose trigger")
      load()
    }

    // update player location
    player.update(ctx)
  }

  load()
  animate()
  
  addEventListener("keydown", function({ keyCode }) {
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

  addEventListener("keyup", function({ keyCode }) {
    switch(keyCode){
      case (68):
        keysPressed.right = false;
        if(player.spriteStatus != "jumpRight" && player.spriteStatus != "jumpLeft" ) player.setSpriteStatus("walkRight")
        break
      case (65):
        keysPressed.left = false;
        if(player.spriteStatus != "jumpRight" && player.spriteStatus != "jumpLeft") player.setSpriteStatus("walkRight")
        break
      default:
        null
    }
  })
}


class Player {
  constructor({x, y}) {
    this.position = {
      x,
      y
    }
    this.width = 80
    this.height = 160
    this.velocity = {
      x: 0,
      y: 0
    };

    this.sprites = {
      walkRight: {
        a: imageFactory(walkRight1),
        b: imageFactory(walkRight2),
        c: imageFactory(walkRight3),
        d: imageFactory(walkRight4),
        e: imageFactory(walkRight5),
        f: imageFactory(walkRight6)
      },
      right: {
        a: imageFactory(runRight1),
        b: imageFactory(runRight2),
        c: imageFactory(runRight3),
        d: imageFactory(runRight4),
        e: imageFactory(runRight5),
        f: imageFactory(runRight6)
      },
      left: {
        a: imageFactory(runLeft1),
        b: imageFactory(runLeft2),
        c: imageFactory(runLeft3),
        d: imageFactory(runLeft4),
        e: imageFactory(runLeft5),
        f: imageFactory(runLeft6)
      },
      jumpRight: {
        a: imageFactory(jumpRight1),
        b: imageFactory(jumpRight2),
        c: imageFactory(jumpRight3),
        d: imageFactory(jumpRight4),
      },
      jumpLeft: {
        a: imageFactory(jumpLeft1),
        b: imageFactory(jumpLeft2),
        c: imageFactory(jumpLeft3),
        d: imageFactory(jumpLeft4),
      }
    }
    
    this.spriteStatus = "runRight"
    this.frame = 1
  }

  update(ctx) {
    this.position.y = this.position.y + this.velocity.y
    this.position.x = this.position.x + this.velocity.x

    this.draw(ctx)
    this.velocity.y = this.velocity.y + GRAVITY
    this.frame++
    if (this.frame === 49) this.frame = 1
  }

  draw(ctx) {
    switch(this.spriteStatus) {
      case "walkRight":
        if (this.frame < 8) {
          ctx.drawImage(this.sprites.walkRight.a, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 16) {
          ctx.drawImage(this.sprites.walkRight.b, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 24) {
          ctx.drawImage(this.sprites.walkRight.c, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 32) {
          ctx.drawImage(this.sprites.walkRight.d, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 40) {
          ctx.drawImage(this.sprites.walkRight.e, this.position.x, this.position.y, this.width, this.height)
        } else {
          ctx.drawImage(this.sprites.walkRight.f, this.position.x, this.position.y, this.width, this.height)
        }
        break
      case "runRight":
        if (this.frame < 8) {
          ctx.drawImage(this.sprites.right.a, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 16) {
          ctx.drawImage(this.sprites.right.b, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 24) {
          ctx.drawImage(this.sprites.right.c, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 32) {
          ctx.drawImage(this.sprites.right.d, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 40) {
          ctx.drawImage(this.sprites.right.e, this.position.x, this.position.y, this.width, this.height)
        } else {
          ctx.drawImage(this.sprites.right.f, this.position.x, this.position.y, this.width, this.height)
        }
        break
      case "runLeft":
        if (this.frame < 8) {
          ctx.drawImage(this.sprites.left.a, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 16) {
          ctx.drawImage(this.sprites.left.b, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 24) {
          ctx.drawImage(this.sprites.left.c, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 32) {
          ctx.drawImage(this.sprites.left.d, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 40) {
          ctx.drawImage(this.sprites.left.e, this.position.x, this.position.y, this.width, this.height)
        } else {
          ctx.drawImage(this.sprites.left.f, this.position.x, this.position.y, this.width, this.height)
        }
        break
      case "jumpRight":
        if (this.frame < 12) {
          ctx.drawImage(this.sprites.jumpRight.a, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 24) {
          ctx.drawImage(this.sprites.jumpRight.b, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 36) {
          ctx.drawImage(this.sprites.jumpRight.c, this.position.x, this.position.y, this.width, this.height)
        } else {
          ctx.drawImage(this.sprites.jumpRight.d, this.position.x, this.position.y, this.width, this.height)
        }
        break
      case "jumpLeft":
        if (this.frame < 12) {
          ctx.drawImage(this.sprites.jumpLeft.a, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 24) {
          ctx.drawImage(this.sprites.jumpLeft.b, this.position.x, this.position.y, this.width, this.height)
        } else if (this.frame < 36) {
          ctx.drawImage(this.sprites.jumpLeft.c, this.position.x, this.position.y, this.width, this.height)
        } else {
          ctx.drawImage(this.sprites.jumpLeft.d, this.position.x, this.position.y, this.width, this.height)
        }
        break
      default:
        console.log("draw switch-case defaulted...")
    }
  }
  

  setYVelocity(velocity) {
    this.velocity.y = velocity
  }

  setXVelocity(velocity) {
    this.velocity.x = velocity
  }

  jump() {
    this.velocity.y = -JUMP_POWER
  }

  setSpriteStatus(status){
    this.spriteStatus = status
  }
}


class Platform {
  constructor({ x, y },{width, height}, image) {
    this.position = {
      x,
      y
    }
    this.width = width
    this.height = height

    this.image = image
  }

  move(velocity) {
    this.position.x = this.position.x + velocity
  }

  draw(ctx) {
    //ctx.fillStyle = "black"
    //ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // x, y, width, height
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}


class Generic {
  constructor({ x, y }, image) {
    this.position = {
      x,
      y
    }
    this.width = 250
    this.height = 10

    this.image = image
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y)
  }
}


function imageFactory(imageSource) {
  const image = new Image()
  image.src = imageSource
  return image
}

function getRandomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// Generates platform based on previous platform's coordinates
// x-coordinate is end of the platform instead of starting point
function platformGenerator(prevCords) {
  let {x, y} = prevCords

  // Coordinates for next platform tile
  x = x + getRandomIntBetween(230, 280)
  y = y + getRandomIntBetween(-180, 180)

  // Ensure that platform is within the screen view
  while (y > CANVA_HEIGHT-100 || y < 300) {
    y = y + getRandomIntBetween(-180, 180)
  }

  const r = getRandomIntBetween(0,2)
  switch(r) {
    case 0:
      return new Platform({x, y}, {width: 513, height: 138}, imageFactory(platformLarge))
    case 1: 
      return new Platform({x, y}, {width: 263, height: 161}, imageFactory(platformSmall))
  }
}


const exportObject = {
  startGame,
  CANVA_WIDTH,
  CANVA_HEIGHT
}

export default exportObject