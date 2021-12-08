const express = require('express');
const app = express();
const config =  require('./config');


app.get('/', (req, res) => {
  res.send('HOME');
});

app.listen(config.PORT, config.HOST);

console.log(`Running on http://${config.HOST}:${config.PORT}`);
