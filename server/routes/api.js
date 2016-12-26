'use strict'

const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/games', (req, res, next) => {
  igdb.games({
    limit: 5,
    offset: 15,
    fields: "*"
  }).then(output)
})

router.get(`/games/${id}`, (req, res, next) => {
  igdb.games({
    ids: [`${id}`],
    fields: '*'
  }).then(output)
})

router.get('/compaines', (req, res, next) => {
  limit: 5,
  offset: 15,
  fields: '*'
}).then(output)

router.get('/')
