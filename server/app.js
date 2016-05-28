var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var categories = require('./routes/categories');
var suggestions = require('./routes/suggestions');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/categories', categories);
app.use('/suggestions', suggestions);



//Loads the application from different locations depending on the environment (DEV or PRD)
if (isDevEnvironment()) {
  app.use(favicon(path.join(__dirname, '../client/app', 'favicon.ico')));
  app.use(express.static(path.join(__dirname, '../client')));
  app.use(express.static(path.join(__dirname, '../client/.tmp')));
  app.use(express.static(path.join(__dirname, '../client/app')));
} else {
  app.use(favicon(path.join(__dirname, '/dist', 'favicon.ico')));
  app.use(express.static(path.join(__dirname, '/dist')));
}


function isDevEnvironment() {
  console.log('Running Express as %s environment!', app.get('env'));
  return app.get('env') === 'DEV';
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;

