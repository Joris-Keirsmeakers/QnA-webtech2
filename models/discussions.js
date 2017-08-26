
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
  questions:[
    {
    questionText:String,
    author:{
      username:String,
      avatar:String},
    comments:[
      {
        user:{
          username:String,
          avatar:String
        },
        text:String
      }
    ]
    }
  ],
},
  {
    collection: 'QnA-discussions'
});

module.exports = mongoose.model('discussion', discussion);
