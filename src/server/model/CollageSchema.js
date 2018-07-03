const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const collage = new Schema({
  id: {
    type: Date.now(),
    unique: true
  },
  user:{
    type: String,
    required: true
  },
  images: [String]
})

const collage = mongoose.model('Collage', collage);