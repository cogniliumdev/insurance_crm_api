const express = require("express");
const { authJwt } = require("../middleware");
const websiteController = require("../controllers/website.controller.js");
const router = express.Router();

router.post("/createWebsite", [authJwt.verifyToken], websiteController.createWebsite);
router.patch("/updateWebsite", [authJwt.verifyToken], websiteController.updateWebsite);
router.delete("/deleteWebsite/:id", [authJwt.verifyToken], websiteController.deleteWebsite);

module.exports = router;