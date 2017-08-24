
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var discussion = new Schema({
  location:String,
  timestamp:String,
  creator:{
    username: String,
    avatar:String
  },
  subject: String,
  question:{
    questionText:String,
    comments:{
      user:{
        userame:String,
        avatar:String
      },
    text:String},
  },
},
  {
    collection: 'QnA-discussions'
});

module.exports = mongoose.model('discussion', discussion);
