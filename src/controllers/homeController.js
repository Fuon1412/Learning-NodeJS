const connection = require("../config/database");

const getHomePage = (req, res) => {
  connection.query("select * from Users u", function (err, results, fields) {
    users = results;
    console.log(results);
    res.send(JSON.stringify(results));
  });
};

const getDumbPage = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getDumbPage,
};
