const express = require('express');
const path = require('path');
require('dotenv').config();
const webRoutes = require('./routes/web');

const mysql = require('mysql2');
const configViewEngine = require('./config/viewEngine');
const app = express();
const port = process.env.PORT || 3030;//8080
const hostname = process.env.HOSTNAME; //localhost

configViewEngine(app);

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit',
});

connection.query(
      'select * from Users u',
      function (err,results, fields){
        console.log(results);
        console.log(fields);
      }
);

app.use('/', webRoutes);
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})