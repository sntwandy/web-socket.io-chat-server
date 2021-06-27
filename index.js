/**
 *
 */

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT  || 8080;

// Serve static route
app.use(express.static('public'));

// Open the connection
io.on('connection', (socket) => {
  console.log('New client connected')
  socket.emit('message', 'Welcome!')
})

// Send a message to everyone
setInterval(() => {
  io.emit('message', 'Hello to everyone from socket.io!')
}, 3000)

// Listening server
server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});