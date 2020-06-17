var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const home = require('./routes/home');
const productos = require('./routes/productos');
const contacto = require('./routes/contacto');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// Cuando el usuario ingresa a host/home se carga el archivo home dentro de la carpeta routes


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', home);
app.use('/productos',productos);
app.use('/contacto', contacto);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("Error")
  next(createError(404));
  
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
