const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = 3000;



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
})

http.listen(PORT, () => {console.log('Listening on port number :' + PORT)})