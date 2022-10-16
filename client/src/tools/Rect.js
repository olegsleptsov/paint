import { getMouseCoordinates } from "../utils/toolsUtils"
import Tool from "./Tool"

export default class Rect extends Tool {
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
    this.startX = getMouseCoordinates(e).mouseX
    this.startY = getMouseCoordinates(e).mouseY
    this.snapshotURL = this.canvas.toDataURL()
  }

  mouseUpHandeler(e) {
    this.isMouseDown = false
  }

  mouseMoveHandeler(e) {
    if (this.isMouseDown) {
      let currentX = getMouseCoordinates(e).mouseX
      let currentY = getMouseCoordinates(e).mouseY
      let width = currentX - this.startX
      let height = currentY - this.startY
      const drawOptions = {
        x: this.startX,
        y: this.startY,
        width,
        height,
      }
      this.draw(drawOptions)
    }
  }

  draw({ x, y, width, height }) {
    const img = new Image()
    img.src = this.snapshotURL
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.rect(x, y, width, height)
      this.ctx.stroke()
    }
  }
}