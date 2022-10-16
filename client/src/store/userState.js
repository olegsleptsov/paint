import { makeAutoObservable } from "mobx"

class CanvasState {
  sessionId = null
  userName = ''

  constructor() {
    makeAutoObservable(this)
  }

  setSessionId(sessionId) {
    this.sessionId = sessionId
  }

  setUserName(userName) {
    this.userName = userName && userName[0].toUpperCase() + userName.slice(1)
  }
};

export default new CanvasState()