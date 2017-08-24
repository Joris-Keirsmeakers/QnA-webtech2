var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var discussions = require('../controller/discussion.js');

router.route('/')
  //.get(discussions.list)
  .post(discussions.create);

router.route('/:discussionId')
  //.get(discussions.read)
  //.put(discussions.update)
  //.delete(discussions.remove);

module.exports = router;
