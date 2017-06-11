"use strict";

const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  
  const ip = req.get('X-Forwarded-For') || req.ip;
  const language = req.get('Accept-Language').split(',')[0];
  const software = req.get('User-Agent').match(/\(([^\(\)\n\f]*)\)/)[1];
  
  res.json({ ip, language, software });
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = server;