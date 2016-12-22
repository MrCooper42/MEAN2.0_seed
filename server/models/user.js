'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const schema = new Schema({
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  },
  local: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String
    },
    userName: {
      type: String
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  linkedin: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  steam: {
    id: String,
    token: String,
    email: String,
    name: String
  }
});

// schema.plugin(passportLocalMongoose)

// hash password
schema.methods.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

// check password

schema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', schema);
