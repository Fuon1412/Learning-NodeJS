const express = require('express');
const path = require('path');
require('dotenv').config();
const webRoutes = require('./routes/web');

const connection = require('./config/database');
const configViewEngine = require('./config/viewEngine');
const app = express();
const port = process.env.PORT || 3030;//8080
const hostname = process.env.HOSTNAME; //localhost

configViewEngine(app);


connection.query(
      'select * from Users u',
      function (err,results, fields){
        console.log(results);
      }
);

app.use('/', webRoutes);
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})