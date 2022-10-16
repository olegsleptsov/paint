import { makeAutoObservable } from "mobx"

class CanvasState {
  canvas = null
  undoList = []
  redoList = []

  constructor() {
    makeAutoObservable(this)
  }

  setCanvas(canvas) {
    this.canvas = canvas
  }

  pushToUndoList(snapshot) {
    this.undoList.push(snapshot)
  }

  pushToRedoList(snapshot) {
    this.redoList.push(snapshot)
  }

  undo() {
    let ctx = this.canvas.getContext('2d')
    if (this.undoList.length > 1) {
      let lastSnapshotURL = this.undoList.pop()
      const penultimateSnapshot = this.undoList[this.undoList.length - 1]
      this.redoList.push(lastSnapshotURL)
      let image = new Image()
      image.src = penultimateSnapshot
      image.onload = async () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height)
      }
    } else {
      let lastSnapshotURL = this.undoList.pop()
      this.redoList.push(lastSnapshotURL)
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }

  redo() {
    const ctx = this.canvas.getContext('2d')
    if (this.redoList.length) {
      const url = this.redoList.pop()
      this.undoList.push(this.canvas.toDataURL())
      let image = new Image()
      image.src = url
      image.onload = async () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height)
      }
    }
  }

};

export default new CanvasState()