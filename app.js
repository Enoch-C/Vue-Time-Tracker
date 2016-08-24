var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/mission';
var _db;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));

MongoClient.connect(mongoUrl, function (err, db) {
  if(err) {
    console.error(err);
    return;
  }

  console.log('connected to mongo');
  _db = db;
  app.listen(8888, function () {
    console.log('server is running...');
  });
});