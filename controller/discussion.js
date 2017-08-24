const Discussion = require('../models/discussions.js');
const User = require('../models/users.js');

//const user= User.
function createDiscussion(req,res,next){
console.log(req.body);
    const discussion = new Discussion({
      location:"",
      timestamp:"",
      creator:{
        username:"",
        avatar:""
      },
      question:"",
      comments:{
        comment:{
          user:{
            userame:"",
            avatar:""
          },
        text:""
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
