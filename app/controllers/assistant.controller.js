const db = require("../models");
const Assistant = db.assistant;

const createAssistant = async (req, res) => {
    try {
        await Assistant.create({
            ...req.body,
            // userId: req.userId
            userId: 1
        });
        return res.status(201).json({ successMsg: "Assistant created" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
}

const getAssistant = async (req, res) => {
    try {
        const assistant = await Assistant.findOne({
            where: {
                userId: req.userId
                // userId: 1
            },
        })
        if (!assistant) {
            return res.status(500).json({ errorMsg: "Server Error" });
        }
        return res.status(200).send(assistant);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ errorMsg: "Server Error" });
    }
}

const updateAssistant = async (req, res) => {
    try {
        await Assistant.update(
            {
                name: req.body?.assistantName,
                phone: req.body?.assistantPhone,
                email: req.body?.assistantEmail,
            }, {
            where: {
                userId: req.userId
                // userId: 1
            }
        });
        return res.status(200).json({ successMsg: "assistant updated successfully" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
}

module.exports = {
    createAssistant,
    getAssistant,
    updateAssistant
};
