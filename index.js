const express = require("express");
const env = require('dotenv').config();
const user = require("./Modules/User.js");
const login = require("./Modules/Login.js");
const jwt = require("jsonwebtoken");
var bodyParser = require('body-parser');
const verify = require("./Middleware/TokenMiddleware");

const app = express();
const Port = 3000;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.set('/views', '../Views');
app.use('/assets',express.static('assets'));

app.use('/',login);

app.get('/user/list',verify, (req, res) => {
    jwt.verify(req.token, 'hoangphongdo', function(err, decoded) {
       if (err) {
           res.sendStatus(403);
       } else {
          res.send("list Users");
       }
    });
})

app.post('/process', urlencodedParser, function (req, res) {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    jwt.sign({user},'hoangphongdo',(err, token) => {
      res.json({
          token
      })
    }); 
})



app.listen(Port, () => console.log(`Server run in port: ${Port}`));