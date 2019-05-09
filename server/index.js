require('newrelic');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')

app.use('/',express.static(__dirname + '/../client', {maxAge: 5000})); //sets maxAge to 5sec
app.use('/:id', express.static(__dirname+'/../client', {maxAge: 5000}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var port = 3000;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
