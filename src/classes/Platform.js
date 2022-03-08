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
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}

export default Platform
