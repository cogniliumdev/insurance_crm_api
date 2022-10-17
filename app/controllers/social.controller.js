const db = require("../models");
const Social = db.social;


const createSocial = async (req, res) => {
    try {
        const { social, userProfileId } = req.body;
        if (!social || social.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide social" });
        }
        await Social.create({
            social: social,
            userProfileId: userProfileId
        });
        return res.status(201).json({ successMsg: "social added" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const updateSocial = async (req, res) => {
    try {
        const { social, socialId } = req.body;
        if (!social || social.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide social" });
        }
        await Social.update(
            { social: social },
            { where: { id: socialId } }
        )
        return res.status(200).json({ successMsg: "social updated" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const deleteSocial = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ errorMsg: "must provide social id to delete" });

        const count = await Social.destroy({ where: { id: id } });

        if (!count) return res.status(500).json({ errorMsg: "social not deleted" });

        return res.status(200).json({ successMsg: "social deleted" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

module.exports = {
    createSocial,
    updateSocial,
    deleteSocial
};