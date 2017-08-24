//hergeruikd het usermodel van examenopdracht 1e zit, minimaal aagepast//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    name:String,
    profilepic:String,
} ,{
    collection: 'QnA-users'
});

module.exports = mongoose.model('User', user);
