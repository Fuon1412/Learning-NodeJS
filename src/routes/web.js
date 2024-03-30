const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandlerRemoveUser,
} = require("../controllers/homeController");
const express = require("express");
const router = express.Router();

router.get("/", getHomePage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);
router.get("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandlerRemoveUser);

module.exports = router;
