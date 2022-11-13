const express = require("express");
const { authJwt } = require("../middleware");
const userProfileController = require("../controllers/userProfile.controller.js");
const router = express.Router();

router.post("/createProfile", [authJwt.verifyToken], userProfileController.createUserProfile);
router.get("/getProfile", [authJwt.verifyToken], userProfileController.getUserProfile);
router.patch("/updateProfile", [authJwt.verifyToken], userProfileController.updateUserProfile);

module.exports = router;