const db = require("../models");
const Address = db.address;


const createAddress = async (req, res) => {
    try {
        const { address, userProfileId } = req.body;
        if (!address || address.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide address" });
        }
        console.log(userProfileId);
        await Address.create({
            address: address,
            user_profileId: userProfileId
        });
        return res.status(201).json({ successMsg: "Address added" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const updateAddress = async (req, res) => {
    try {
        const { address, addressId } = req.body;
        if (!address || address.trim().length <= 0) {
            return res.status(400).json({ errorMsg: "must provide address" });
        }
        await Address.update(
            { phone: phone },
            { where: { id: addressId } }
        )
        return res.status(200).json({ successMsg: "Address updated" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const deleteAddress = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).json({ errorMsg: "must provide address id to delete" });

        const count = await Address.destroy({ where: { id: id } });

        if (!count) return res.status(500).json({ errorMsg: "Address not deleted" });

        return res.status(200).json({ successMsg: "Address deleted" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

module.exports = {
    createAddress,
    updateAddress,
    deleteAddress
};