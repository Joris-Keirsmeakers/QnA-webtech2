var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var schema = mongoose.Schema;



const Discussion = require('../models/discussions.js');
const User = require('../models/users.js');


function createDiscussion(req,res,next){
  if (req.body.subjectfield) {
    console.log(req.session.passport)
    const discussion = new Discussion({
      location:"",
      creator:{
        username:req.user.name,
        avatar:req.user.profilepic,
        id:req.session.passport.user
      },
      subject:req.body.subjectfield,
    });

    discussion.save((err, result) => {
      if (err) {
      res.status(500);
      return res.send(err);
    }
    return result;
    })

}}

function post(req,res,next){

  //console.log(req.session)

  if(!req.body.questionfield && !req.body.commentfield)
  {
    console.log ("No input detected");
    return
  }

  if (req.body.commentfield) {

    Discussion.update({ _id: req.params.discussionId ,"questions._id": req.body.Questionid },
      {$push:
        {"questions.$.comments":
          {text:req.body.commentfield,
           user:
           {username:req.user.name,
            avatar:req.user.profilepic,
            id:req.user._id
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

  }

  if (req.body.questionfield) {
    Discussion.update({ _id: req.params.discussionId },
      {$push:
        {questions:
          {questionText:req.body.questionfield,
           author:
           {username:req.user.name,
            avatar:req.user.profilepic,
            id:req.user._id
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

   req.session.save(function (err) {
    //res.redirect('/discussion/'+req.params.discussionId)
   });

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
