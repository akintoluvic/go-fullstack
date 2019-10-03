const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user')

const app = express();

mongoose.connect('mongodb+srv://green:916HyyV9rcDjQexN@cluster0-79dqk.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connection to MongoDB successful');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.log(error);
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);

app.use('/api/auth', userRoutes);

module.exports = app;