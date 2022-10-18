const express = require("express");
const consumerTagController = require("../controllers/consumerTag.controller.js");
const router = express.Router();

router.post("/createConsumerTag", consumerTagController.createConsumerTag);
router.patch("/updateConsumerTag", consumerTagController.updateConsumerTag);
router.delete("/deleteConsumerTag/:id", consumerTagController.deleteConsumerTag);

module.exports = router;