const {
  getHomePage,
  getDumbPage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const express = require("express");
const router = express.Router();

router.get("/", getHomePage);
router.get("/dumb", getDumbPage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router;
