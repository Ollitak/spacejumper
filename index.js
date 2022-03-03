const CANVA_WIDTH = 1900
const CANVA_HEIGHT = 600

function draw() {
  const canvas = document.getElementById("canvas")
  canvas.width = CANVA_WIDTH
  canvas.height = CANVA_HEIGHT

  let ctx = canvas.getContext("2d")
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  startGame(ctx)
}

function startGame(ctx) {
  const player = new Player({x: 50, y: 50})
  player.drawPlayer(ctx)
}


class Player {
  constructor({x, y}) {
    this.position = {
      x,
      y
    }
    this.width = 100
    this.heigth = 100
  }

  drawPlayer(ctx) {
    // x, y, width, height
    ctx.fillStyle = "black"
    ctx.fillRect(this.position.x, this.position.y, this.width, this.heigth);
  }
}
