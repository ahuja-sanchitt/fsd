const books = [
  { id: 1, title: 'Atomic habits', author: 'James Clear' },
  { id: 2, title: 'The Rudest Book Ever', author: 'Shwetabh Gangwar' },
  { id: 3, title: 'Your Name', author: 'Makato Shinkai' }
];

module.exports = {
  getBooks: () => {
    return books;
  },
  getBookById: (id) => {
    return books.find(book => book.id === id);
  }
};