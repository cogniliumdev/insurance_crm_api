const express = require("express");
const { authJwt } = require("../middleware");
const emailController = require("../controllers/email.controller.js");
const router = express.Router();

router.post("/createEmail", [authJwt.verifyToken], emailController.createEmail);
router.patch("/updateEmail", [authJwt.verifyToken], emailController.updateEmail);
router.delete("/deleteEmail/:id", [authJwt.verifyToken], emailController.deleteEmail);

module.exports = router;