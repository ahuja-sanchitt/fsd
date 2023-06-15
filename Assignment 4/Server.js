const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const users = [
  { id: 1, name: 'Sanchit Ahuja' },
  { id: 2, name: 'Prateek' },
  { id: 3, name: 'Kumar' }
];

// API endpoint to get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});