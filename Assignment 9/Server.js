const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/api/users', (req, res) => {
  fs.readFile('Data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const users = JSON.parse(data).users;
    res.json(users);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});





