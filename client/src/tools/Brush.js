import { getMouseCoordinates } from "../utils/toolsUtils"
import Tool from "./Tool"

export default class Brush extends Tool {
  constructor(canvas) {
    super(canvas)
    this.listen()
  }

  listen() {
    this.canvas.onmousedown = this.mouseDownHandeler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandeler.bind(this)
    this.canvas.onmousemove = this.mouseMoveHandeler.bind(this)
  }

  mouseDownHandeler(e) {
    this.mouseX = getMouseCoordinates(e).mouseX
    this.mouseY = getMouseCoordinates(e).mouseY
    this.isMouseDown = true
    this.ctx.beginPath()
    this.ctx.moveTo(this.mouseX, this.mouseY)
  }

  mouseUpHandeler(e) {
    this.isMouseDown = false
  }

  mouseMoveHandeler(e) {
    if (this.isMouseDown) {
      this.draw(getMouseCoordinates(e).mouseX, getMouseCoordinates(e).mouseY)
    }
  }

  draw(x, y) {
    this.ctx.lineTo(x, y)
    this.ctx.stroke()
  }
}