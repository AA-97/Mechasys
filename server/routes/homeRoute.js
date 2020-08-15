const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get('/hi', homeController.getHome);

module.exports = router;