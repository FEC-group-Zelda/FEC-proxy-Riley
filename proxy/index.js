const express = require('express');
const path = require('path');

let proxy = express();

proxy.use(express.static(path.join(__dirname, '../client/dist')));
proxy.use(bodyParser.json());
proxy.use(bodyParser.urlencoded({ extended: false }));

proxy.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Router
// proxy.use('/', router);

module.exports = proxy;