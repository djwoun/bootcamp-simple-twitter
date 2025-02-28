const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet
