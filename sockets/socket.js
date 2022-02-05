const { io } = require("../index");
const Bands = require("../models/bands");
const Band = require("../models/band");

const bands = new Bands();

//Temporal bands
bands.addBand(new Band("Queen"));
bands.addBand(new Band("Led Zeppelin"));
bands.addBand(new Band("Heroes del Silencio"));
bands.addBand(new Band("Zoe"));

console.log(bands);

//Socket Messages
//Client represents a device connected to the socket service
io.on("connection", (client) => {
  console.log("Client connected");
  client.emit("active-bands", bands.getBands());
  //Callback that triggers once the client disconnects
  client.on("disconnect", () => {
    console.log("Client disconnected");
  });

  //Listen event message
  client.on("message", (payload) => {
    console.log("Mensaje!!", payload);
    //Creates event message
    io.emit("message", { admin: "New message" });
  });

  client.on("emit-message", (payload) => {
    console.log(payload);

    //This one emits everybody except for the one who emitted originally
    client.broadcast.emit("new-message", payload);
  });

  client.on("vote-band", (payload) => {
    bands.voteBand(payload.id);
    io.emit("active-bands", bands.getBands());
  });

  client.on("add-band", (payload) => {
    const newBand = new Band(payload.name);
    bands.addBand(newBand);
    io.emit("active-bands", bands.getBands());
  });

  client.on("delete-band", (payload) => {
    bands.deleteBand(payload.id);
    io.emit("active-bands", bands.getBands());
  });
});
