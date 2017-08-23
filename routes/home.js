var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var users = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home.pug', { title: 'QnA sessions nearby' });
});

module.exports = router;
