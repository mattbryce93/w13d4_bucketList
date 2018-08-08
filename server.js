const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));


// Connecting to the database
MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if (err) {
    console.log(err);
    return;
  }
  const db = client.db("countries");

  console.log('Connected to database');

  // CREATE route

  // READ route

  // DELETE route

  // UPDATE route

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
})
