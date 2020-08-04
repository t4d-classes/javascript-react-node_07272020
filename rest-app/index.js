const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const adapter = new FileAsync('db.json');
const dbJSON = low(adapter);

const { createAPI } = require('./routes');

dbJSON.then(db => {

  const app = express();
  const port = 3050;

  app.use(cors());
  app.use(bodyParser.json());

  Object.keys(db.getState()).forEach(resourceName => {
    app.use(createAPI(resourceName, db));
  });
  
  // app.use('/cars/:carId', (req, res) => {
  //   const car = db.get('cars').find({ id: Number(req.params.carId) }).value();
  //   res.json(car);
  // });
  
  // app.use('/cars' /* route/url */, /* middleware */ (req, res) => {
  //   const cars = db.get('cars').value();
  //   res.json(cars);
  // });
  
  
  app.listen(port, () => {
    console.log('REST API Listening on Port: ' + port);
  });

});


