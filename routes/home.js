var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var users = require('../models/users');
var discussions = require('../controller/discussion.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home.pug', { title: 'QnA' });
});

router.route('/')
  .post(discussions.create);

module.exports = router;
