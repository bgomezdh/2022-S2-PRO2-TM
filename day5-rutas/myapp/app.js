var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*  Requerir los modulos de rutas*/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let profeRouter = require('./routes/profesores');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Que use el archivo de rutas para el prefijo correspondiente */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profesores', profeRouter)

/* ruta  0 /profesores*/ 

/*                prefijo    sufijo */
/* localhost:3000/profesores/index*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
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
