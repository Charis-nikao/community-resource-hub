const socketio = require('socket.io');
const Chat = require('../models/Chat');

module.exports = (server) => {
  const io = socketio(server, { cors: { origin: '*' } });

  io.on('connection', (socket) => {
    console.log('Socket connected', socket.id);

    socket.on('joinRoom', ({ requestId }) => {
      socket.join(requestId);
    });

    socket.on('sendMessage', async ({ requestId, senderId, message }) => {
      try {
        const chat = await Chat.create({ request: requestId, sender: senderId, message });
        io.to(requestId).emit('message', chat);
      } catch (err) {
        console.error(err);
      }
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected', socket.id);
    });
  });

  return io;
};
