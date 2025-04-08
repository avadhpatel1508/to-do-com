const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  tasks: Array,
  completed: Array,
  score: Number,
});

module.exports = mongoose.model('User', UserSchema);
