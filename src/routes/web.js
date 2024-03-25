const { getHomePage , getDumbPage, postCreateUser } = require('../controllers/homeController');
const express = require("express");
const router = express.Router();

router.get("/", getHomePage);
router.get("/dumb", getDumbPage);
router.post('/create-user', postCreateUser);
module.exports = router;