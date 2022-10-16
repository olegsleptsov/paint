import { makeAutoObservable } from "mobx"

class ToolsState {
  tool = null
  constructor() {
    makeAutoObservable(this)
  }

  setTool(tool) {
    this.tool = tool
  }

  setLineWidth(lineWidth) {
    this.tool.lineWidth = lineWidth
  }

  setStrokeColor(color) {
    this.tool.strokeColor = color
  }
};

export default new ToolsState()