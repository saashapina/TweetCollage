const express = require('express');

const Collage = require('./Collage.js');

const router = express.Router();

router
.route('/collage')
.get((req, res) => {
  Collage.find()
    .then(response => {
      res.status(200).json({ data: response })
    })
    .catch(err => res.status(500).json({ data: err }))
})
.post((req, res) => {
  const { images, user } = req.body;
  if (user && images ) {
    Collage.create({ user, images })
      .then(response => res.status(201).json({ data: response }))
      .catch(err => res.status(500).json({ errorMessage: "There was an error while saving the collage data to the database" }))
  } else {
    res.status(400).json({ errorMessage: "Please provide images and user handle "})
  }
});

module.exports = router;