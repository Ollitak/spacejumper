function imageFactory(imageSource) {
  const image = new Image()
  image.src = imageSource
  return image
}

export default imageFactory
