const mongoose = require('mongoose');

const Collage = new mongoose.Schema({
  key: {
    type: Date.now(),
    unique: true
  },
  user:{
    type: String,
    required: true
  },
  images: [String]
})

model.exports = mongoose.model('Collage', Collage);