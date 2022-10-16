const express = require('express')
const app = express()
const WSserver = require('express-ws')(app)

const aWss = WSserver.getWss();

const PORT = process.env.PORT || 5000

app.ws('/', (ws, req) => {
  ws.on('message', (msg) => {
    const message = JSON.parse(msg)
    switch (message.method) {
      case 'connection': {
        connectionHandler(ws, message)
      } break
      case 'message': {

      }
        break
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
})

const connectionHandler = (ws, message) => {
  ws.id = message.sessionId
  broadcasetConnection(ws, message)
}

const broadcasetConnection = (ws, message) => {
  aWss.clients.forEach(client => {
    if (client.id === message.sessionId) {
      client.send(JSON.stringify({ userName: message.userName, title: `Пользователь ${message.userName} подключился` }))
    }
  })
}
