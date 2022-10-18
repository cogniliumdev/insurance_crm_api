const express = require("express");
const consumerController = require("../controllers/consumer.controller.js");
const router = express.Router();

router.post("/createConsumer",consumerController.createConsumer);
router.get("/getAllConsumer",consumerController.getAllConsumer);
router.patch("/updateConsumer", consumerController.updateConsumer);
router.delete("/deleteConsumer/:id", consumerController.deleteConsumer);

module.exports = router;