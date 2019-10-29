const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // create variables in routes that can be passed into the ejs templates and rendered to front end
  const drinks = [
    {name: 'Bloody Mary', drunkness: 3},
    {name: 'Martini', drunkness: 5},
    {name: 'Scotch', drunkness: 10},
  ];

  const tagline = 'This is the end for you!';

  // render will look for views folder
  res.render('pages/index', {
    drinks: drinks,
    tagline: tagline,
  });
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});