const express = require('express');
const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var bodyParser = require('body-parser')
var books = require('./routes/books');
var transactions = require('./routes/transactions');

//body parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
