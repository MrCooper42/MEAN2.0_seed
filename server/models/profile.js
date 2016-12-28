const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//use moment

const User = require('./user');
const Blog = require('./blog');
const Works = require('./works');

const schema = new Schema({
  title: {
    type: String,
  },
  avatar: {
    type: String
  },
  summary: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  experiance: [
    {
      company: {
        type: String
      },
      roll: {
        type: String
      },
      dates: {
        type: Date // get a date range?
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String
      },
      study: {
        type: String
      },
      degree: {
        type: String
      },
      dates: {
        type: Date // get date range?
      },
      extras: {
        type: String
      }
    }
  ],
  skills: [
    {
      type: String
    }
  ],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  works: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Works'
    }
  ],
  blog: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Blog'
    }
  ]
});

module.exports = mongoose.model('Profile', schema);
