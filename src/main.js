import platform from "../img/platform_250x100.png"
import background from "../img/arizona_background_1900x800.png"
import { rejectSeries } from "async"
 
const CANVA_WIDTH = 1600
const CANVA_HEIGHT = 800

const GRAVITY = 1
const JUMP_POWER = 25
const HORIZONTAL_MOVEMENT_SPEED = 7


function startGame(ctx) {
  let player
  let score // scroll offset i.e. how much platforms have scrolled left

  let platform1
  let platform2 
  let platform3 
  let platforms 
  
  let background1 
  let generics
  
  let keysPressed = {
    right: false,
    left: false
  }

  function load() {
    score = 0

    player = new Player({x: 120, y: 300})

    platform1 = new Platform({x: 50, y: 500}, imageFactory(platform))
    platform2 = new Platform({x: 800, y: 550}, imageFactory(platform))
    platform3 = new Platform({x: 1200, y: 650}, imageFactory(platform))
    platforms = [platform1, platform2, platform3]
    
    background1 = new Generic({ x: 0, y: 0 }, imageFactory(background) )
    generics = [background1]
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
      if (player.position.y + player.height <= platform.position.y &&
          player.position.y + player.height + player.velocity.y >= platform.position.y &&
          player.position.x + player.width > platform.position.x &&
          player.position.x < platform.position.x + platform.width) {
          player.setYVelocity(0)
        }

      /* 
        Movement:
        if (100 < player x position < 500) => move player
        else => move platforms 
      */
      if (keysPressed.right && player.position.x < 600) {
        player.setXVelocity(HORIZONTAL_MOVEMENT_SPEED)
      } else if (keysPressed.left && player.position.x > 200) {
        player.setXVelocity(-HORIZONTAL_MOVEMENT_SPEED)
      } else {
        player.velocity.x = 0

        if(keysPressed.right) {
          platform.move(-HORIZONTAL_MOVEMENT_SPEED)
          score += HORIZONTAL_MOVEMENT_SPEED
        } else if (keysPressed.left) {
          platform.move(HORIZONTAL_MOVEMENT_SPEED)
          score -= HORIZONTAL_MOVEMENT_SPEED
        }
      } 
    })

    // win
    if (score > 2000) {
      console.log("YOU WIN")
    }

    // lose
    if (player.position.y + player.height + player.velocity.y > CANVA_HEIGHT + 500) {
      load()
    }

    // update player location
    player.update(ctx)
  }

  load()
  animate(ctx, player)
  
  addEventListener("keydown", function({ keyCode }) {
    switch (keyCode){
      case (87):
        player.jump();
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
        break
      case (65):
        keysPressed.left = false;
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
    this.width = 70
    this.height = 70
    this.velocity = {
      x: 0,
      y: 0
    };
  }

  update(ctx) {
    this.position.y = this.position.y + this.velocity.y
    this.position.x = this.position.x + this.velocity.x
    
    this.draw(ctx)
    
    this.velocity.y = this.velocity.y + GRAVITY

    // Apply gravity and stop velocity on ground
    /*
    if (this.position.y + this.height + this.velocity.y <= CANVA_HEIGHT) {
      this.velocity.y = this.velocity.y + GRAVITY
    } else {
      this.velocity.y = 0
    }
    */
  }

  draw(ctx) {
    ctx.fillStyle = "red"
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // x, y, width, height
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
}


class Platform {
  constructor({ x, y }, image) {
    this.position = {
      x,
      y
    }
    this.width = 250
    this.height = 10

    this.image = image
  }

  move(velocity) {
    this.position.x = this.position.x + velocity
  }

  draw(ctx) {
    //ctx.fillStyle = "black"
    //ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // x, y, width, height
    ctx.drawImage(this.image, this.position.x, this.position.y)
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


const exportObject = {
  startGame,
  CANVA_WIDTH,
  CANVA_HEIGHT
}

export default exportObject