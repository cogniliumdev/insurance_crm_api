const express = require("express");
const phoneController = require("../controllers/phone.controller.js");
const router = express.Router();

router.post("/createPhone", phoneController.createPhone);
router.patch("/updatePhone", phoneController.updatePhone);
router.delete("/deletePhone/:id", phoneController.deletePhone);

module.exports = router;