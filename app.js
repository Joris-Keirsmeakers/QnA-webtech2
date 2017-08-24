// Veel code van webtech2 in 1e zit was perfect herbruikbaar voor deze toepassing//

const express = require('express');
const app = express();
const mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var expressvalidator = require('express-validator');
var passport = require('passport');
var session = require('express-session');

//database config
var config = require('./config/config.js');
mongoose.connect(config.database);
var db = mongoose.connection;
db.once('open',function(){
    console.log("database connection gelukt");
});

///routes//
var facebook = require('./routes/facebook');
var index = require('./routes/index');
var home = require('./routes/home');
var discussion = require('./routes/discussion');

//listen confirm//
app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({ secret:'shhsecret'}));

//passport opzetten
app.use(passport.initialize());
app.use(passport.session());
//Body-parser voor data te parsen
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use('/auth/facebook', facebook);
app.use('/', index);
app.use('/home', home);
app.use('/discussion', discussion);

module.exports = app;
