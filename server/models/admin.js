const mongoose = require('mongoose');

//schema
const moderatorSchema = new mongoose.Schema({
    userName:{
        type: String,
        require: true
    },
    password:{
        type: String,
        reture: true
    },
});

//Model
const Admin = mongoose.model('admin',moderatorSchema);

module.exports = Admin;