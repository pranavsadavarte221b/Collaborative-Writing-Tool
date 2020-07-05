const mongo = require('mongoose');

const UserSchema = new mongo.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const User = mongo.model('User', UserSchema);
module.exports = User;