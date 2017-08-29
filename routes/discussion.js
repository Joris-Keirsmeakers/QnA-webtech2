var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var discussions = require('../models/discussions.js')
var discussionC = require('../controller/discussion.js');

router.get('/:discussionId',function(req,res,next){
  var userid=req.session.passport.user
  discussions.findOne({_id:req.params.discussionId}, function(err, discussion){
    res.render("discussion.pug", {discussion:discussion, userid:userid})
  });
});

router.route('/:discussionId')
  .post(discussionC.post);

module.exports = router;
