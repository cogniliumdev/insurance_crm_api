const db = require("../models");
const Website = db.website;


const createWebsite = async (req, res) => {
    try {
        const { website, userProfileId } = req.body;
        if (!website || website.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide website" });
        }
        await Website.create({
            website: website,
            user_profileId: userProfileId
        });
        return res.status(201).json({ successMsg: "website added" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const updateWebsite = async (req, res) => {
    try {
        console.log(req.body)
        const { website, websiteId } = req.body;
        if (!website || website.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide website" });
        }
        const response = await Website.update(
            { website: website },
            { where: { id: websiteId } }
        );

        if (!response[0]) {
            return res.status(500).json({ errorMsg: "Server Error" });
        }

        return res.status(200).json({ successMsg: "Website updated" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const deleteWebsite = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ errorMsg: "must provide website id to delete" });

        const count = await Website.destroy({ where: { id: id } });

        if (!count) return res.status(500).json({ errorMsg: "Website not deleted" });

        return res.status(200).json({ successMsg: "Website deleted" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

module.exports = {
    createWebsite,
    updateWebsite,
    deleteWebsite
};