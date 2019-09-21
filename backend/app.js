const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Thing created successfully'
    });
});

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'ghezhoi',
            title: 'My first thing',
            description: 'All of the info describing my first thing',
            imageUrl: '',
            price: '4900',
            userId: 'ghezhoi',
          },
          {
            _id: 'ghezhoiz',
            title: 'My Second thing',
            description: 'All of the info describing my second thing',
            imageUrl: '',
            price: '5900',
            userId: 'ghezhoiz',
          }
    ];
    res.status(200).json(stuff);
});



module.exports = app;