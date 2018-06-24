'use strict';

const express = require('express'),
      fs = require('fs'),
      app = express(),
      PORT = 3000,
      files = fs.readdirSync('./pics'),
      pictures = [];

files.forEach(elem => {
  pictures.push({ path: `./pics/${elem}`, title: elem.substring(0, elem.indexOf('.')), desc: 'testDesc' });
});

app.use('/assets', express.static('assets'));
app.use('/pics', express.static('pics'));
app.use('/static', express.static('static'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home', {
    pictures,
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
