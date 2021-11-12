
const express = require("express");
const bodyParser = require('body-parser');
const app = express();


const port = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());






app.use('/', require('./routes/users'));


app.listen(port, () => {

    console.log('server running on port 4000!!!!');

});