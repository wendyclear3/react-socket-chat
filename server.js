const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
})

const rooms = new Map()

app.get('/rooms', (req, res) => {
  res.json(rooms)
})

io.on('connection', (socket) => {
  console.log('user connected', socket.id)
})

server.listen(1488, (err) => {
  if (err) {
    throw Error(err)
  }
  console.log(`Server has started on port 1488`)
})
