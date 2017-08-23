// Veel code van webtech2 in 1e zit was perfect herbruikbaar voor deze toepassing//

const express = require('express');
const app = express();
const mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var expressvalidator = require('express-validator');
var facebook = require('./routes/facebook');
var index = require('./routes/index');

var config = require('./config/config.js');
mongoose.connect(config.database);

var db = mongoose.connection;
db.once('open',function(){
    console.log("gelukt");
});

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/auth/facebook', facebook);

app.use('/', index);
module.exports = app;
