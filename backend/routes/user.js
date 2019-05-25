const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/", userController.Create);

router.put("/:id", userController.update);

router.get("/", userController.find);

module.exports = router;
