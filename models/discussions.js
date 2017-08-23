
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var discussion = new schema({
  location:String,
  timestamp:String,
  creator:{
    username: String,
    avatar:String
  },
  question: String,
  comments:{
    comment:{
      user:{
        userame:String,
        avatar:String
      }
      text:String
    }
  }

},{
    collection: 'QnA-discussions'
});

module.exports = mongoose.model('Account', Account);
