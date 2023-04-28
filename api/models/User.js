const mongoose = require('mongoose');
const {Schema} = mongoose;
const jwt = require('jsonwebtoken');
const UserSchema = new Schema({
    name: String,
    email: {type:String, unique:true},
    password: String,
   
});


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;