var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var discussions = require('../models/discussions.js')
var discussionC = require('../controller/discussion.js');

router.get('/:discussionId',checkAuthentication, function(req,res,next){
  var userid=req.user._id
  discussions.findOne({_id:req.params.discussionId}, function(err, discussion){
    res.render("discussion.pug", {discussion:discussion, userid:userid})
  });
});

router.route('/:discussionId')
  .post(discussionC.post);

router.get('/',function(req,res){
  res.redirect('/home')
})

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
              next();
    } else{

        res.redirect("/");
        console.log("authentication failed")
        
      }
  }


module.exports = router;
