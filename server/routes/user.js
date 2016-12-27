'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

router.post('/', (req, res, next) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 12),
        email: req.body.email
    });
    user.save((err, result) => {
        if (err) {
            return res.status(500).json({
                title: 'Bad things happened',
                error: err
            });
        }
        res.status(201).json({
            message: 'User Created',
            obj: result
        })
    })
});

module.exports = router;

router.post('/signin', (req, res, next) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) {
            return res.status(500).json({
                title: 'Bad things happened',
                error: err
            });
        }
        if (!user) {
            return res.status(500).json({
                title: 'Login failed',
                error: {
                    message: 'Invalid login credentials'
                }
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(500).json({
                title: 'Login failed',
                error: {
                    message: 'Invalid login credentials'
                }
            });
        }
        let token = jwt.sign({
            user: user
        }, 'secret', {
            expiresIn: 7200
        });
        res.status(200).json({
            message: 'Succesfully logged in',
            token: token,
            userId: user._id
        })
    });
});
