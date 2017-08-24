var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var users = require('../models/users');
var discussions = require('../models/discussions.js')
var discussionC = require('../controller/discussion.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  discussions.find({}, function(err, discussion) {
    res.render('home.pug', {loadedDiscussions:discussion});
  });
});

router.route('/')
  .post(discussionC.create);

module.exports = router;
