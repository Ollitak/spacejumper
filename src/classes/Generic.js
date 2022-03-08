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

export default Generic
