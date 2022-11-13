const express = require("express");
const { authJwt } = require("../middleware");
const addressController = require("../controllers/address.controller.js");
const router = express.Router();

router.post("/createAddress", [authJwt.verifyToken], addressController.createAddress);
router.patch("/updateAddress", [authJwt.verifyToken], addressController.updateAddress);
router.delete("/deleteAddress/:id", [authJwt.verifyToken], addressController.deleteAddress);

module.exports = router;