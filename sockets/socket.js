const { io } = require('../index');
const Bands = require('../models/bands');

const bands = new Bands();
console.log('init server');

// bands.addBand(new Band('Queen'));
// bands.addBand(new Band('Led Zeppelin'));
// bands.addBand(new Band('Heroes del Silencio'));
// bands.addBand(new Band('Zoe'));

// console.log(bands);

// console.log('init server');
//Socket Messages
//Client represents a device connected to my socket service
io.on('connection', client => {
    console.log('Client connected');
    //Callback that triggers once the client disconnects
  client.on('disconnect', () => { 
      console.log('Client disconnected');
  });

  //Listen event message
  client.on('message', (payload)=>{
      console.log('Mensaje!!', payload);
    //Create event message
    io.emit('message', {admin: 'New message'});
      });
  
      client.on('emit-message', (payload)=>{
        console.log(payload);
        //This will emit the message to all clientes connected to the socket
        //io.emit('new-message', payload);
        //This one emits everybody except for the one who emitted originally
        client.broadcast.emit('new-message', payload);
      })
     
});