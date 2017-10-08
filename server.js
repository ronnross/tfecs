var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.listen(3000, () => {
  console.log('Now listening on port 3000!');
});
