const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const getDumbPage = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, myName: name, city } = req.body;
  console.log(email, name, city);
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  res.send("User created");
};
module.exports = {
  getHomePage,
  getDumbPage,
  postCreateUser,
  getCreatePage,
};
