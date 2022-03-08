import platformLarge from "../../img/platforms/tile1.png"
import platformSmall from "../../img/platforms/tile2.png"

import imageFactory from "./imageFactory"
import Platform from "../classes/Platform"
import { CANVA_HEIGHT } from "../main"


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

export default platformGenerator
