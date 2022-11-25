const express = require("express");
const consumerTagController = require("../controllers/consumerTag.controller.js");
const router = express.Router();
const { authJwt } = require("../middleware");


router.post("/createConsumerTag", [authJwt.verifyToken], consumerTagController.createConsumerTag);
router.patch("/updateConsumerTag", [authJwt.verifyToken], consumerTagController.updateConsumerTag);
router.delete("/deleteConsumerTag/:id", [authJwt.verifyToken], consumerTagController.deleteConsumerTag);

module.exports = router;