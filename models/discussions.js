
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var discussion = new Schema({
  location:String,
  time : { type : Date, default: Date.now },
  creator:{
    username: String,
    avatar:String,
    id:String
  },
  subject: String,
  locked: { type : Boolean, default: 0 },
  questions:[
    {
    questionText:String,
    author:{
      username:String,
      avatar:String,
      id: String},
    comments:[
      {
        text:String,
        user:{
          username:String,
          avatar:String,
          id:String
        },

      }
    ]
    }
  ],
},
  {
    collection: 'QnA-discussions'
});

module.exports = mongoose.model('discussion', discussion);
