const express = require('express');
const app = express();
const port = 5500
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const books = [];

// store book
app.post("/books",(req, res)=>{
    const { title, author, publishedDate } = req.body;
    const id = books.length + 1;
    const newBook = { id, title, author, publishedDate };
    books.push(newBook);
    res.json(newBook);
})

// lists books
app.get('/books', (req, res) => {
  res.json(books);
});


// Read book by id
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});


// Update  book by id
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, publishedDate } = req.body;
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex !== -1) {
    books[bookIndex] = { id, title, author, publishedDate };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Delete book by id
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});



app.listen(port, ()=>{console.log('server connect');})