var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');
var logger = require('morgan');
var ejs = require('ejs');


var indexRouter = require('./routes/index');
var errorRouter = require('./routes/error');
var basic_tableRouter = require('./routes/basic_table');
var basic_tasktableRouter = require('./routes/basic_tasktable');
var usertableRouter = require('./routes/usertable');
var dropzoneRouter = require('./routes/dropzone');
var homeRouter = require('./routes/home');
var homeguanRouter = require('./routes/homeguan');
var homedingRouter = require('./routes/homeding');
var taskRouter = require('./routes/task');
var infoRouter = require('./routes/info');
var touchRouter = require('./routes/touch');
var loginRouter = require('./routes/login');
var mail_composeRouter = require('./routes/mail_compose');
var registrationRouter = require('./routes/registration');
var responsive_tableRouter = require('./routes/responsive_table');
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.set('views', path.join(__dirname, 'views'));
app.engine(".html",ejs.__express);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cookieParser('exercise'));
app.use(session({
  secret: 'exercise',
  name: 'text',
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/error', errorRouter);
app.use('/basic_table', basic_tableRouter);
app.use('/basic_tasktable', basic_tasktableRouter);
app.use('/usertable', usertableRouter);
app.use('/dropzone', dropzoneRouter);
app.use('/home', homeRouter);
app.use('/homeguan', homeguanRouter);
app.use('/homeding', homedingRouter);
app.use('/task', taskRouter);
app.use('/info', infoRouter);
app.use('/touch', touchRouter);
app.use('/login', loginRouter);
app.use('/mail_compose', mail_composeRouter);
app.use('/registration', registrationRouter);
app.use('/responsive_table', responsive_tableRouter);

// app.use('/users', usersRouter);

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
