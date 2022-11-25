const { social, phone, email, address, website } = require("../models");
const db = require("../models");
const UserProfile = db.userProfile;
const Assistant = db.assistant;

const createUserProfile = async (req, res) => {
    try {
        console.log(req.body)
        const socialsList = req.body?.socials?.map((social) => ({ social: social }));
        const phonesList = req.body?.phones?.map((phone) => ({ phone: phone }));
        const emailsList = req.body?.emails?.map((email) => ({ email: email }));
        const addressesList = req.body?.addresses?.map((address) => ({ address: address }));
        const websitesList = req.body?.websites?.map((website) => ({ website: website }));

        await UserProfile.create(
            {
                userId: req.userId,
                // userId: 1,
                title: req.body?.title,
                company: req.body?.company,
                timezone: req.body?.timezone,
                SSN: req.body.SSN,
                TIN: req.body.TIN,
                birth_date: req.body?.birthDate,
                license_types: req.body?.licenseTypes,
                broker_dealer: req.body?.brokerDealer,
                relationship_manager: req.body?.relationshipManager,
                payment_plan: req.body?.paymentPlan,
                comp_level: req.body?.compLevel,
                subdomain: req.body?.subdomain,
                socials: socialsList,
                phones: phonesList,
                emails: emailsList,
                addresses: addressesList,
                websites: websitesList
            },
            {
                include: [social, phone, email, address, website]
            }
        );

        await Assistant.create({
            ...req.body,
            // userId: 1,
            userId: req.userId,
            name: req.body?.assistantName,
            phone: req.body?.assistantPhone,
            email: req.body?.assistantEmail,
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
                userId: req.userId
                // userId: 1
            },
            include: ["phones", "emails", "socials", "addresses", "websites"]
        })
        if (!profile) {
            return res.status(404).json({ errorMsg: "No User Profile Found!" });
        }
        return res.status(200).send(profile);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ errorMsg: "Server Error" });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        await UserProfile.update(req.body, {
            where: {
                userId: req.userId
                // userId: 1
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
