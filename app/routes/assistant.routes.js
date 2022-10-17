const express = require("express");
const assistantController = require("../controllers/assistant.controller.js");
const router = express.Router();

router.post("/createAssistant",assistantController.createAssistant);
router.get("/getAllAssistants",assistantController.getAllAssistants);
router.patch("/updateAssistant", assistantController.updateAssistant);
router.delete("/deleteAssistant/:id", assistantController.deleteAssistant);

module.exports = router;