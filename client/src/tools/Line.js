import { getMouseCoordinates } from "../utils/toolsUtils"
import Tool from "./Tool"

export default class Line extends Tool {
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
    this.isMouseDown = true
    this.currentX = getMouseCoordinates(e).mouseX
    this.currentY = getMouseCoordinates(e).mouseY
    this.ctx.beginPath()
    this.ctx.moveTo(this.currentX, this.currentY)
    this.snapshotURL = this.canvas.toDataURL()
  }

  mouseUpHandeler(e) {
    this.isMouseDown = false
  }

  mouseMoveHandeler(e) {
    if (this.isMouseDown) {
      let currentX = getMouseCoordinates(e).mouseX
      let currentY = getMouseCoordinates(e).mouseY
      this.draw(currentX, currentY)
    }
  }

  draw(x, y) {
    const img = new Image()
    img.src = this.snapshotURL
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.moveTo(this.currentX, this.currentY)
      this.ctx.lineTo(x, y)
      this.ctx.stroke()
    }
  }
}