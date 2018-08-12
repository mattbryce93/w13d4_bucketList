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
  server.post('/api/countries', function(req, res){
    const countries = db.collection('countries');
    const countryToSave = req.body;
    countries.findOne(countryToSave, function(err, success){
      if(err){
        console.log(err);
      } else {
        if(success == null){
          countries.save(countryToSave, function(err, result){
            if(err){
              console.log(err);
              res.status(500);
              res.send()
            }
            console.log('Country saved to database');
            res.status(201)
            res.json(result.ops[0]);
          })
        }
      }
    })
  })

  // READ ALL route
  server.get('/api/countries', function(req, res){
    const countries = db.collection('countries');
    countries.find().toArray(function(err, allCountries){
      if(err){
        console.log(err);
        res.status(500);
        res.send()
      }
      res.json(allCountries)
    })
  })

  // DELETE ALL route
  server.delete('/api/countries', function(req, res){
    const filterObject = {}
    const countries = db.collection('countries');
    countries.deleteMany(filterObject, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send()
      }
      res.status(204)
      res.send()
    })
  })

// DELETE ONE country

  server.delete('/api/countries/:id', function(req, res){
    const countries = db.collection('countries');
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    countries.deleteOne(filterObject, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log('Deleted object in database');
      res.status(204);
      res.send();
    })
  });

  // UPDATE route

  server.put('/api/countries/:id', function(req, res){
    const countries = db.collection('countries');
    const objectID = ObjectID(req.params.id)
    const filterObject = {_id: objectID}
    const updatedCountry = req.body;
    countries.update(filterObject, updatedCountry, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send()
      }
      res.status(204)
      res.send()
    })
  })

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
})
