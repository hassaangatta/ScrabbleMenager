const mongoose = require('mongoose');

//schema
const moderatorSchema = new mongoose.Schema({
    userName:{
        type: String,
    },
    password:{
        type: String,
    },
});

//Model
const Admin = mongoose.model('admin',moderatorSchema);

module.exports = Admin;