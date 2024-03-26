const connection = require("../config/database");

const getHomePage = (req, res) => {
   return res.render("home.ejs");
};

const getDumbPage = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  let { email, name, city } = req.body;
  connection.query(
    `INSERT INTO 
    Users (email, name, city) 
    VALUES (?, ?, ?)`,
    [email, name, city],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  )
  res.send('User created');
};
module.exports = {
  getHomePage,
  getDumbPage,
  postCreateUser
};
