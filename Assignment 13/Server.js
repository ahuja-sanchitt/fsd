const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/college', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Create a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Create a user model
const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  // Create a new user instance
  const newUser = new User({
    name,
    email
  });

  // Save the user to the database
  newUser.save()
    .then(() => {
      console.log('User inserted successfully');
      res.status(200).send('User inserted successfully');
    })
    .catch((err) => {
      console.error('Error inserting user:', err);
      res.status(500).send('Error inserting user into database');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});






