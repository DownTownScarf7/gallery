'use strict';

const express = require('express'),
      app = express(),
      PORT = 3000,
      pictures = [
        { path: './pics/asd.jpg', title: 'testTitle', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum. Quis, saepe.' },
        { path: './pics/secret.jpg', title: 'testTitle2', desc: 'Minima dignissimos rem laudantium nam ex reprehenderit ducimus accusamus quo cum tempore quae perferendis placeat voluptate, provident modi.' },
      ];

app.use('/assets', express.static('assets'));
app.use('/pics', express.static('pics'));
app.use('/static', express.static('static'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  let id = req.query.id && req.query.id < pictures.length ? req.query.id : 0;
  res.render('home', {
    pictures,
    id,
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
