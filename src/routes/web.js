const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World with nodejs and express");
});
router.get("/dumb", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;