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
    });

    discussion.save((err, result) => {
    if (err) {
      res.status(500);
      return res.send(err);
    }
    res.redirect("/home");
  });
}

function post(req,res,next){
  console.log(req.body.Questionid)

  if(!req.body.questionfield && !req.body.commentfield)
  {
    console.log ("HAH NEE");
    return
  }

  if (req.body.commentfield) {

    Discussion.update({ _id: req.params.discussionId ,"questions._id": req.body.Questionid },
      {$push:
        {"questions.$.comments":
          {text:req.body.commentfield,
           user:
           {username:"req.user.name",
            avatar:"req.user.profilepic"
          }
        }
        }
      },
      function (err,user) {
        if(err){
          console.log(err);
        }
      }
    )
  //  res.redirect('/discussion/'+req.params.discussionId)
  }


  if (req.body.questionfield) {
    Discussion.update({ _id: req.params.discussionId },
      {$push:
        {questions:
          {questionText:req.body.questionfield,
           author:
           {username:"req.user.name",
            avatar:"req.user.profilepic"
          },
          comments:[],
          }
        }
      },
      function (err,user) {
        if(err){
          console.log(err);
        }
      }
    )
    //res.redirect('/discussion/'+req.params.discussionId)
  }
  return
}

module.exports = {
  create: createDiscussion,
  post: post
//  list: listDiscussions,
//  read: readDiscussion,
//  update: updateDiscussion,
//  lock: lockDiscussion,
//  findById: findById
}
