const express =  require("express");
const assistantController = require("../controllers/assistant.controller.js");
const router =  express.Router();

router.post("/createAssistant", assistantController.createAssistant );
router.get("/getAssistant", assistantController.getAssistant );
router.patch("/updateAssistant", assistantController.updateAssistant );

module.exports = router;

