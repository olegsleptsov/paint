export default class Tool {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.removePrevListeners()
  }

  removePrevListeners() {
    this.canvas.onMouseDown = null
    this.canvas.onMouseDown = null
    this.canvas.onMouseMove = null
  }

  set strokeColor(color) {
    this.ctx.strokeStyle = color
  }

  set lineWidth(width) {
    this.ctx.lineWidth = width
  }
};