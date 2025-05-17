const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const http = require("http");
const { Server } = require("socket.io");

// 
const app = express();


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.listen(4000, () => {
    console.log('listening on port 4000')
})
