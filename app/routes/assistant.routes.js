const express = require("express");
const { authJwt } = require("../middleware");
const assistantController = require("../controllers/assistant.controller.js");
const router = express.Router();

router.post("/createAssistant", [authJwt.verifyToken], assistantController.createAssistant);
router.get("/getAssistant", [authJwt.verifyToken], assistantController.getAssistant);
router.patch("/updateAssistant", [authJwt.verifyToken], assistantController.updateAssistant);

module.exports = router;

