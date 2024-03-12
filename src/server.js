const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3030;//8080
const hostname = process.env.HOSTNAME; //localhost

//config template 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//config static file
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World with nodejs and express')
})
app.get('/dumb', (req, res) => {
  res.render('sample.ejs')
})
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})