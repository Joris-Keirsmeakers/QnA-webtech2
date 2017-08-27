// Veel code van webtech2 in 1e zit was perfect herbruikbaar voor deze toepassing//

const express = require('express');
const app = express();
const mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var expressvalidator = require('express-validator');
var passport = require('passport');
var session = require('express-session');
var primus = require('primus');

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

//listen confirm/
/*
app.listen(3000, () => {
  console.log('App listening on port 3000!')
});*/

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Body-parser voor data te parsen
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use(session({ secret:'supersecretysecretstuff',
                  resave: true,
                  saveUninitialized: true}));
//passport opzetten
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth/facebook', facebook);
app.use('/', index);
app.use('/home', home);
app.use('/discussion', discussion);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
