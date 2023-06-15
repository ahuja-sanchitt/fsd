const mongoose = require('mongoose');

// Create a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create a user model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
