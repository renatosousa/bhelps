const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('../models/Idea');
const Idea = mongoose.model('ideas');

router.post('/', (req, res) => {
  console.log(req.body.prestador);

  Idea.find({title: {'$regex': req.body.prestador, '$options': 'i'}})
    .sort({date:'desc'})
    .then(ideas => {
      console.log(req.body.prestador);
      res.render('ideas/index', {
        ideas:ideas
      });
    });
});

router.get('/', (req, res) => {

  Idea.find()
    .sort({date:'desc'})
    .then(ideas => {
      res.render('ideas/index', {
        ideas:ideas
      });
    });
});


module.exports = router;
