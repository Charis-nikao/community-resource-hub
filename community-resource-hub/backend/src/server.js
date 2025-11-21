require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const socketServer = require('./sockets/chatSocket');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/community-hub';

connectDB(MONGO_URI);

const server = http.createServer(app);
const io = socketServer(server);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
