const { io } = require('../index');

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
        io.emit('new-message', payload);
      })

});