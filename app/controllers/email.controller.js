const db = require("../models");
const Email = db.email;


const createEmail = async (req, res) => {
    try {
        const { email, userProfileId } = req.body;
        if (!email || email.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide email" });
        }
        await Email.create({
            email: email,
            userProfileId: userProfileId
        });
        return res.status(201).json({ successMsg: "email added" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const updateEmail = async (req, res) => {
    try {
        const { email, emailId } = req.body;
        if (!email || email.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide email" });
        }
        await Email.update(
            { email: email },
            { where: { id: emailId } }
        )
        return res.status(200).json({ successMsg: "email updated" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const deleteEmail = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ errorMsg: "must provide email id to delete" });

        const count = await Email.destroy({ where: { id: id } });

        if (!count) return res.status(500).json({ errorMsg: "email not deleted" });

        return res.status(200).json({ successMsg: "email deleted" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

module.exports = {
    createEmail,
    updateEmail,
    deleteEmail
};