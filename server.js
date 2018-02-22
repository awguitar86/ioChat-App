import { connect } from 'http2';

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server running...');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    //Disconnect
    connections.splice(connections.indexOf(sockets), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
})