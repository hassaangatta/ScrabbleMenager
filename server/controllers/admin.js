const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

const hashPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(hash);
};

const handleLogin = async(req,res) {
    const admin = await Admin.find({});
    result = {
        login : false
    };
    const user = req.body.userName;
    const password = req.body.password;
    if (admin[0].userName === user && admin[0].password === hashPassword(password))
    {
        result.login = true;
    }
    return res.json(result);
};

module.exports = {
    handleLogin,
};