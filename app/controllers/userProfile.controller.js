const db = require("../models");
const UserProfile = db.userProfile;

const createUserProfile = async (req, res) => {
    try {
        await UserProfile.create({
            ...req.body,
            // userId: req.userId
            userId: 2
        });
        return res.status(201).json({ successMsg: "profile created" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
}

const getUserProfile = async (req, res) => {
    try {
        const profile = await UserProfile.findOne({
            where: {
                // userId: req.userId
                userId: 2
            },
            include:["phones", "emails","socials"]
        })
        if (!profile) {
            return res.status(500).json({ errorMsg: "Server Error" });
        }
        return res.status(200).send(profile);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ errorMsg: "Server Error" });
    }
}

const updateUserProfile = async (req, res) => {
    try {
        await UserProfile.update(req.body, {
            where: {
                // userId: req.userId
                userId: 2
            }
        });
        return res.status(200).json({ successMsg: "profile updated successfully" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ errorMsg: "Server Error" });
    }
}

module.exports = {
    createUserProfile,
    getUserProfile,
    updateUserProfile
};
