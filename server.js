var express = require('express');
var app = express();
var data = require('./mock-data');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/api', (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log('Now listening on port 3000!');
});
