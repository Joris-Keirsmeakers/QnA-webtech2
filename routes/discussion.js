var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var discussions = require('../controller/discussion.js');

router.route('/')
  .post(discussions.create);

router.route('/:discussionId')
  //.get(discussions.read)
  //.put(discussions.update)
  //.delete(discussions.remove);

  router.get('/', function(req, res, next) {
    res.render('home.pug', { title: 'QnA' });
  });
module.exports = router;
