const user = require("express").Router();

user.get('/list', (req, res) => {
    res.send("Wellcome List user");
})

module.exports = user;