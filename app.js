const express = require('express');
const app = express(); // kurang parentheses

var mongoose = require('mongoose');

let db = 'mongodb://hacktiv8:hacktiv8Super@cluster0-shard-00-00-remkh.mongodb.net:27017,cluster0-shard-00-01-remkh.mongodb.net:27017,cluster0-shard-00-02-remkh.mongodb.net:27017/api-crud-mongoose?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
mongoose.connect(db, (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var books = require('./routes/books');  // kurang titik dan slash
var transactions = require('./routes/transactions'); // s.d.a

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
