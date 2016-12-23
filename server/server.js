'use strict'

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const expressSanitizer = require('express-sanitizer');
const methodOverride = require('method-override');
const passport = require('passport');
require('../config/passport')(passport);
const mongoose = require('mongoose');
// moment, method overide, and expressSanitizer would be good to add...

const app = express();
mongoose.connect(`mongodb://localhost:27017/mean2-test`);

const appRoutes = require('./routes/app');
const authRoutes = require('./routes/auth')(app, passport);
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/messages');


// view engine setup
app.set('views', path.join(__dirname, '../public/views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());

// passport and auth
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, '../public')));

app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//pass local user variable
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

// CORS
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
	next();
});

app.use('/', appRoutes);
app.use('/message', messageRoutes);
app.use('/auth', authRoutes);
// app.use('/auth', authRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => res.render('index'));

module.exports = app;
