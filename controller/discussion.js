var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

const Discussion = require('../models/discussions.js');
const User = require('../models/users.js');


function createDiscussion(req,res,next){
    const discussion = new Discussion({
      location:"",
      timestamp:"",
      creator:{
        username:req.user.name,
        avatar:req.user.profilepic,
      },
      subject:req.body.subjectfield,
      questions:[
        {
        questionText:"",
        author:{
          userame:"",
          avatar:""},
        comments:{
          user:{
            username:"",
            avatar:""
          },
          text:""}
        }
      ],
    });

    discussion.save((err, result) => {
    if (err) {
      res.status(500);
      return res.send(err);
    }
    res.redirect("/home");
  });
}

function askQuestion(req,res,next){

    var id = req.params.discussionId;
    var question = req.body.questionfield
    console.log(req.user.name);
    Discussion.update({ _id: req.params.discussionId },

    //  {$addToSet:{courses:{$each:Selectedcourses}}},

      {$push:
        {questions:
          {questionText:req.body.questionfield,
           author:
           {username:req.user.name,
            avatar:req.user.profilepic
          },
          comments:[],
          }
        }
      },



      function (err,user) {
            if(err){
              console.log(err);
            }}
  ),

    console.log("questioeeeaaen delivered", id)
  };

function comment(req,res){
  Console.log("HAAAAAAAAAA")
}
module.exports = {
  create: createDiscussion,
  ask: askQuestion,
  comment: comment
//  list: listDiscussions,
//  read: readDiscussion,
//  update: updateDiscussion,
//  lock: lockDiscussion,
//  findById: findById
}
