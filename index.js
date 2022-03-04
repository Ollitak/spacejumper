import platform from "./img/platform_scaled.png"

const CANVA_WIDTH = 1900
const CANVA_HEIGHT = 800

const GRAVITY = 0.5
const JUMP_POWER = 20
const HORIZONTAL_MOVEMENT_SPEED = 7

let score = 0 // scroll offset i.e. how much platforms have scrolled left


function main() {
  const canvas = document.getElementById("canvas")
  canvas.width = CANVA_WIDTH
  canvas.height = CANVA_HEIGHT

  let ctx = canvas.getContext("2d")

  startGame(ctx)
}


function startGame(ctx) {
  const player = new Player({x: 100, y: 400})
  player.draw(ctx)

  const platform_image = new Image()
  platform_image.src = platform

  const platform1 = new Platform({x: 200, y: 150}, platform_image)
  const platform2 = new Platform({x: 600, y: 300}, platform_image)
  const platform3 = new Platform({x: 900, y: 150}, platform_image)
  const platform4 = new Platform({x: 1200, y: 300}, platform_image)
  const platform5 = new Platform({x: 1400, y: 150}, platform_image)
  const platform6 = new Platform({x: 1600, y: 300}, platform_image)
  const platforms = [platform1, platform2, platform3, platform4, platform5, platform6]
  
  const keysPressed = {
    right: false,
    left: false
  }


  function animate() {
    requestAnimationFrame(animate)
  
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

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
        else => move platforms (or background if you will) 
      */
      if (keysPressed.right && player.position.x < 500) {
        player.setXVelocity(HORIZONTAL_MOVEMENT_SPEED)
      } else if (keysPressed.left && player.position.x > 100) {
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

    console.log(score)
    player.update(ctx)
  }

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
    this.width = 100
    this.height = 100
    this.velocity = {
      x: 0,
      y: 0
    };
  }

  update(ctx) {
    this.position.y = this.position.y + this.velocity.y
    this.position.x = this.position.x + this.velocity.x
    
    this.draw(ctx)

    // Apply gravity and stop velocity on ground
    if (this.position.y + this.height + this.velocity.y <= CANVA_HEIGHT) {
      this.velocity.y = this.velocity.y + GRAVITY
    } else {
      this.velocity.y = 0
    }
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

main()