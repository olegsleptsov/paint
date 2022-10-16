import { getMouseCoordinates } from "../utils/toolsUtils";
import Tool from "./Tool"

export default class Circle extends Tool {
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

  mouseUpHandeler() {
    this.isMouseDown = false
  }

  mouseMoveHandeler(e) {
    if (this.isMouseDown) {
      let currentX = getMouseCoordinates(e).mouseX
      let currentY = getMouseCoordinates(e).mouseY
      let width = currentX - this.startX
      let height = currentY - this.startY
      let radius = Math.sqrt(width ** 2 + height ** 2)
      const drawOptions = {
        x: this.startX,
        y: this.startY,
        radius,
      }
      this.draw(drawOptions)
    }
  }

  draw({ x, y, radius }) {
    const img = new Image()
    img.src = this.snapshotURL
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.arc(x, y, radius, 0, 2 * Math.PI)
      this.ctx.stroke()
    }
  }
}