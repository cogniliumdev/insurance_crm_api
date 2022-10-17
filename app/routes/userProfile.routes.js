const express =  require("express");
const userProfileController = require("../controllers/userProfile.controller.js");
const router =  express.Router();

router.post("/createProfile", userProfileController.createUserProfile );
router.get("/getProfile", userProfileController.getUserProfile );
router.patch("/updateProfile", userProfileController.updateUserProfile );

module.exports = router;