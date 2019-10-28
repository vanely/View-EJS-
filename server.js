const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // render will look for views folder
  res.render('pages/index');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})