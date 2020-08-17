const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.post("/", userController.addUser);
router.post("/search", userController.searchUser);

module.exports = router;
