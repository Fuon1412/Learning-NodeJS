const express = require('express')
const path = require('path')
const app = express()
const port = 8080

//config template 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/dumb', (req, res) => {
  res.render('sample.ejs')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})