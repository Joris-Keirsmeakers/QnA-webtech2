const Discussion = require('../models/discussions.js')

function createDiscussion(req,res,next){
console.log(req.body)
    const discussion = new Discussion(req.body);

}

module.exports = {
  create: createDiscussion,
//  list: listDiscussions,
//  read: readDiscussion,
//  update: updateDiscussion,
//  lock: lockDiscussion,
//  findById: findById
}
