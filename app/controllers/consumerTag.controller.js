const db = require("../models");
const ConsumerTag = db.consumerTag;


const createConsumerTag = async (req, res) => {
    try {
        const { tag, consumerId } = req.body;
        if (!tag || tag.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide tag" });
        }
        await ConsumerTag.create({
            tag: tag,
            consumerId: consumerId
        });
        return res.status(201).json({ successMsg: "tag added" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const updateConsumerTag = async (req, res) => {
    try {
        const { tag, tagId } = req.body;
        if (!tag || tag.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide tag" });
        }
        await ConsumerTag.update(
            { tag: tag },
            { where: { id: tagId } }
        )
        return res.status(200).json({ successMsg: "tag updated" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const deleteConsumerTag = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ errorMsg: "must provide tag id to delete" });

        const count = await ConsumerTag.destroy({ where: { id: id } });

        if (!count) return res.status(500).json({ errorMsg: "tag not deleted" });

        return res.status(200).json({ successMsg: "tag deleted" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

module.exports = {
    createConsumerTag,
    updateConsumerTag,
    deleteConsumerTag
};