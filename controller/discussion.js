var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

const Discussion = require('../models/discussions.js');
const User = require('../models/users.js');


function createDiscussion(req,res,next){
console.log(req.user.name, req.user.profilepic);
    const discussion = new Discussion({
      location:"",
      timestamp:"",
      creator:{
        username:req.user.name,
        avatar:req.user.profilepic,
      },
      question:req.body.subjectfield,
      comments:{
        comment:{
          user:{
            username:"",
            avatar:"",
          },
        text:"",
      },
      }



    });

    discussion.save((err, result) => {
    if (err) {
      res.status(500);
      return res.send(err);
    }
    res.send("HUZZAH");
  });
}


module.exports = {
  create: createDiscussion,
//  list: listDiscussions,
//  read: readDiscussion,
//  update: updateDiscussion,
//  lock: lockDiscussion,
//  findById: findById
}
