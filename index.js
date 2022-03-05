import exports from "./src/main.js"
import "./index.css"


const { startGame, CANVA_WIDTH, CANVA_HEIGHT } = exports

const canvas = document.getElementById("canvas")
canvas.width = CANVA_WIDTH
canvas.height = CANVA_HEIGHT

let ctx = canvas.getContext("2d")

startGame(ctx, canvas)
