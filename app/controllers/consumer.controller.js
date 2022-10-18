const db = require("../models");
const Consumer = db.consumer;


const createConsumer = async (req, res) => {
    try {
        await Consumer.create({
            ...req.body,
            // userId: req.userId
            userId: 1
        });
        return res.status(201).json({ successMsg: "Consumer created" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const getAllConsumer = async (req, res) => {
    try {
        const consumers = await Consumer.findAll({
            where: {
                // userId: req.userId
                userId: 1
            },
            include:["consumertags"]
        });
        if (consumers.length == 0) {
            return res.status(200).json({ successMsg: "No consumers" });
        }
        return res.status(200).send(consumers);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ errorMsg: "Server Error" });
    }
}


const updateConsumer = async (req, res) => {
    try {
        await Consumer.update(req.body, {
            where: {
                // userId: req.userId
                userId: 1
            }
        });
        return res.status(200).json({ successMsg: "Consumer updated" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const deleteConsumer = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ errorMsg: "must provide assistant id to delete" });

        const count = await Consumer.destroy({ where: { id: id } });

        if (!count) return res.status(500).json({ errorMsg: "Consumer not deleted" });

        return res.status(200).json({ successMsg: "Consumer deleted" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

module.exports = {
    createConsumer,
    updateConsumer,
    deleteConsumer,
    getAllConsumer
};