const express = require("express");
const socialController = require("../controllers/social.controller.js");
const router = express.Router();

router.post("/createSocial", socialController.createSocial);
router.patch("/updateSocial", socialController.updateSocial);
router.delete("/deleteSocial/:id", socialController.deleteSocial );

module.exports = router;