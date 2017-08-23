//hergeruikd het usermodel van examenopdracht 1e zit, minimaal aagepast//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema({
    name:String,
    profilepic:String,
    //courses: Array,
    role: String,
    //demo:Number,
    //die:Number,
    //vote:Boolean,
    //onStage:Boolean,
    //date:String
    //discussions: Array,
} ,{
    collection: 'QnA-users'
});

module.exports = mongoose.model('Account', Account);
