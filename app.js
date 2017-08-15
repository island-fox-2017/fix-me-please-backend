const express = require('express');
const app = express(); // kurang parentheses

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var books = require('./routes/books');  // kurang titik dan slash
var transactions = require('./routes/transactions'); // s.d.a

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
