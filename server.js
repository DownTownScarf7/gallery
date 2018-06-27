'use strict';

const express = require('express'),
      fs = require('fs'),
      app = express(),
      PORT = 8080,
      files = fs.readdirSync('./pics'),
      pictures = [];

files.forEach(elem => {
  pictures.push({ path: `./pics/${elem}`, title: elem.substring(0, elem.indexOf('.')) });
});

app.use('/assets', express.static('assets'));
app.use('/pics', express.static('pics'));
app.use('/static', express.static('static'));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    pictures,
  });
});

// app.get('/pictureJSON', (req, res) => {
//   files.forEach(elem => {
//     res.json({
//       pictures,
//     });
//   });
// });

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
