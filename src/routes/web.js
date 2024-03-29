const {
  getHomePage,
  getDumbPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");
const express = require("express");
const router = express.Router();

router.get("/", getHomePage);
router.get("/dumb", getDumbPage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
router.get("/update", getUpdatePage);

module.exports = router;
