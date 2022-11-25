const express = require("express");
const consumerController = require("../controllers/consumer.controller.js");
const router = express.Router();
const { authJwt } = require("../middleware")

router.post("/createConsumer", [authJwt.verifyToken], consumerController.createConsumer);
router.get("/getAllConsumer", [authJwt.verifyToken], consumerController.getAllConsumer);
router.get("/getSingleConsumer/:id", [authJwt.verifyToken], consumerController.getSingleConsumer);
router.patch("/updateConsumer", [authJwt.verifyToken], consumerController.updateConsumer);
router.delete("/deleteConsumer/:id", [authJwt.verifyToken], consumerController.deleteConsumer);

module.exports = router;