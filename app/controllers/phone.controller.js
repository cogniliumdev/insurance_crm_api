const db = require("../models");
const Phone = db.phone;


const createPhone = async (req, res) => {
    try {
        const { phone, userProfileId } = req.body;
        if (!phone || phone.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide Phone Number" });
        }
        await Phone.create({
            phone: phone,
            userProfileId: userProfileId
        });
        return res.status(201).json({ successMsg: "Phone number added" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const updatePhone = async (req, res) => {
    try {
        const { phone, phoneId } = req.body;
        if (!phone || phone.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide Phone Number" });
        }
        await Phone.update(
            { phone: phone },
            { where: { id: phoneId } }
        )
        return res.status(200).json({ successMsg: "Phone number updated" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const deletePhone = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ errorMsg: "must provide phone id to delete" });

        const count = await Phone.destroy({ where: { id: id } });

        if (!count) return res.status(500).json({ errorMsg: "phone number not deleted" });

        return res.status(200).json({ successMsg: "Phone number deleted" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

module.exports = {
    createPhone,
    updatePhone,
    deletePhone
};