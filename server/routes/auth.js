'use strict'

const express = require('express');
// const passport = require('passport');
const User = require('../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const router = express.Router();

const isLoggedIn = (req, res, next) => {;
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/')
}

module.exports = function(app, passport) {

	// req.session.user._id
	// req.session.user.local
	// req.session.user.iAdmin

	router.post('/signup', function(req, res, next) {
		passport.authenticate('local-signup', function(err, user, info) {
			if (err) {
				return res.status(500).json({
					title: 'The server turned to the dark side',
					error: err
				});
			}
			req.logIn(user, function(err) {
				if (err) {
					return next(res.status(500).json({
						title: 'The server turned to the dark side',
						error: err
					}));
				}
				// here redirect to profile
				return res.status(200).json({
					message: 'Success was had! You\'re logged in',
					obj: user
				});
			})
		})(req, res, next);
	});

	router.post('/signin', (req, res, next) => {
		passport.authenticate('local-login', function(err, user, info) {
			if (err) {
				return res.status(500).json({
					title: 'The server turned to the dark side',
					error: err
				});
			}
			req.logIn(user, function(err) {
				if (err) {
					return next(res.status(500).json({
						title: 'The server turned to the dark side',
						error: err
					}));
				}
				// here redirect to profile
				return res.status(200).json({
					message: 'Success was had! You\'re logged in',
					obj: user
				});
			})
		})(req, res, next);
	});

	// 	User.findOne({
	// 		'local.email': req.body.email
	// 	}, (err, user) => {
	// 		console.log(user, "user in signin");
	// 		if (err) {
	// 			return res.status(500).json({
	// 				title: 'Bad things happened',
	// 				error: err
	// 			});
	// 		}
	// 		if (!user) {
	// 			return res.status(500).json({
	// 				title: 'Login failed',
	// 				error: {
	// 					message: 'Invalid login credentials'
	// 				}
	// 			});
	// 		}
	// 		if (!bcrypt.compareSync(req.body.password, user.password)) {
	// 			return res.status(500).json({
	// 				title: 'Login failed',
	// 				error: {
	// 					message: 'Invalid login credentials'
	// 				}
	// 			});
	//
	// 		res.status(200).json({
	// 			message: 'Succesfully logged in',
	// 			token: token,
	// 			userId: user._id
	// 		})
	// 	});
	// });

	router.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	router.get('/ping', function(req, res) {
		res.status(200).send("pong!");
	});
	//start social accounts

	// app.get('/auth/facebook', passport.authenticate('facebook')); //,{scope: 'email'}
	//
	// app.get('auth/facebook/callback',
	//   passport.authenticate('facebook', {
	//     successRedirect: '/profile',
	//     failureRedirect: '/'
	//   }))// make sure to change all the redirects

	// app.get('/auth/github',
	//   passport.authenticate('github', { scope: [ 'user:email' ] }));
	//
	// app.get('/auth/github/callback',
	//   passport.authenticate('github', { failureRedirect: '/login' }),
	//   function(req, res) {
	//     // Successful authentication, redirect home.
	//     res.redirect('/');
	//   });

	//end social accounts
	return router
}
