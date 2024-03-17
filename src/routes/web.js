const { getHomePage , getDumbPage } = require('../controllers/homeController');
const express = require("express");
const router = express.Router();

router.get("/", getHomePage);
router.get("/dumb", getDumbPage);

module.exports = router;