const login = require("express").Router();

login.get('/login', (req, res) => {
    res.render('login');
})

module.exports = login;