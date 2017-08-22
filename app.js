const express = require('express');
const app = express();
const mongoose = require('mongoose');

var config = require('./config/config.js');
mongoose.connect(config.database);

app.get('/', (req, res) => {
  res.send('gutten tag World!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});
