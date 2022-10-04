const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const catRoutes = require('./routes/cat-routes');

const app=express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });
  app.use('/api/cat', catRoutes);

  mongoose
  .connect(
    `mongodb://localhost:27017/Deep`
  )
  .then(() => {
    app.listen(5000);
    console.log("CONNECTED");
  })
  .catch(err => {
    console.log(err);
  });