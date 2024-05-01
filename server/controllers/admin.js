const Admin = require('../models/admin');

const hashPassword = (password) => {
    let hashedPassword = '';
    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
            charCode += 3;
            hashedPassword += String.fromCharCode(charCode);
        } else {
            hashedPassword += password[i];
        }
    }
    return hashedPassword;
};

const handleLogin = async(req,res) => {
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