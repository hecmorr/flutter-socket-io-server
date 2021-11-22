const express = require('express');
const path = require('path');
//It reads dotenv and uses those envinroment variables
require('dotenv').config();

//Express App
const app = express();

//Node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');






//Public path
//this will connect to wherever the server is connected to
const publicPath = path.resolve(__dirname, 'public');

//Through this method we use the publicPath in our server
app.use(express.static(publicPath));



server.listen( process.env.PORT, (err)=>{

if(err) throw new Error(err);

console.log('Server Running on port: ', process.env.PORT);

}  );