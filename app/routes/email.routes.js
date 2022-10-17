const express = require("express");
const emailController = require("../controllers/email.controller.js");
const router = express.Router();

router.post("/createEmail", emailController.createEmail);
router.patch("/updateEmail", emailController.updateEmail);
router.delete("/deleteEmail/:id", emailController.deleteEmail);

module.exports = router;