const express = require("express");
const { authJwt } = require("../middleware");
const socialController = require("../controllers/social.controller.js");
const router = express.Router();

router.post("/createSocial", [authJwt.verifyToken], socialController.createSocial);
router.patch("/updateSocial", [authJwt.verifyToken], socialController.updateSocial);
router.delete("/deleteSocial/:id", [authJwt.verifyToken], socialController.deleteSocial);

module.exports = router;