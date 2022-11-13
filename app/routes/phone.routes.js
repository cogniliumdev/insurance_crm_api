const express = require("express");
const { authJwt } = require("../middleware");
const phoneController = require("../controllers/phone.controller.js");
const router = express.Router();

router.post("/createPhone", [authJwt.verifyToken], phoneController.createPhone);
router.patch("/updatePhone", [authJwt.verifyToken], phoneController.updatePhone);
router.delete("/deletePhone/:id", [authJwt.verifyToken], phoneController.deletePhone);

module.exports = router;