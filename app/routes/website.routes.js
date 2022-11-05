const express = require("express");
const websiteController = require("../controllers/website.controller.js");
const router = express.Router();

router.post("/createWebsite", websiteController.createWebsite);
router.patch("/updateWebsite", websiteController.updateWebsite);
router.delete("/deleteWebsite/:id", websiteController.deleteWebsite);

module.exports = router;