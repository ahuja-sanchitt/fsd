const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Employee', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
