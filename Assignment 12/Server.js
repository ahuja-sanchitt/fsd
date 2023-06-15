const express = require('express');
const app = express();
const port = 3000;

const booksModule = require('./Books');

app.get('/books', (req, res) => {
  const books = booksModule.getBooks();
  res.json(books);
});

app.get('/books/:id', (req, res) => {
  const bookId = Number(req.params.id);
  const book = booksModule.getBookById(bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json(book);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});