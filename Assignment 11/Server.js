const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname + '/public/styles.css');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});