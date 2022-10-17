const express = require("express");
const addressController = require("../controllers/address.controller.js");
const router = express.Router();

router.post("/createAddress", addressController.createAddress);
router.patch("/updateAddress", addressController.updateAddress);
router.delete("/deleteAddress/:id", addressController.deleteAddress);

module.exports = router;