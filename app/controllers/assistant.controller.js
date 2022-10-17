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
};

const getAllAssistants = async (req, res) => {
    try {
        const assistants = await Assistant.findAll({
            where: {
                // userId: req.userId
                userId: 1
            },
        })
        if (assistants.length == 0) {
            return res.status(200).json({ errorMsg: "No assistants" });
        }
        return res.status(200).send(assistants);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ errorMsg: "Server Error" });
    }
}


const updateAssistant = async (req, res) => {
    try {
        await Assistant.update(req.body, {
            where: {
                // userId: req.userId
                userId: 1
            }
        });
        return res.status(200).json({ successMsg: "Assistant updated" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const deleteAssistant = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ errorMsg: "must provide assistant id to delete" });

        const count = await Assistant.destroy({ where: { id: id } });

        if (!count) return res.status(500).json({ errorMsg: "Assistant not deleted" });

        return res.status(200).json({ successMsg: "Assistant deleted" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

module.exports = {
    createAssistant,
    updateAssistant,
    deleteAssistant,
    getAllAssistants
};