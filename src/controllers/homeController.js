const connection = require("../config/database");

const getHomePage = (req, res) => {
   return res.render("home.ejs");
};

const getDumbPage = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log(req.body);
  conslole.log(req.body);
  res.send('User created');
};
module.exports = {
  getHomePage,
  getDumbPage,
  postCreateUser
};
