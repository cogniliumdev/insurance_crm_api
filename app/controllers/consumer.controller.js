const { consumerTag } = require("../models");
const db = require("../models");
const Consumer = db.consumer;


const createConsumer = async (req, res) => {
    try {
        const { title, birthDate, gender, heightWeight, tobacco, SSN, driversLicNo, driversLicState, citizenShip, countryBorn, stateBorn, martialStatus, spouse, entityType, primaryContact, contactMethod, contactTime, primaryPhone, primaryEmail, homePrimaryAddress, occupation, employer, createDate, lastContact, brand, leadType, tags, quoterURL, ipAddress, source, referrer, } = req.body;
        const tagsList = tags?.map((tag) => ({ tag: tag }));

        await Consumer.create(
            {
                // userId: 1,
                userId: req.userId,
                title: title,
                birth_date: birthDate,
                gender: gender,
                height_weight: heightWeight,
                tobacco: tobacco,
                SSN: SSN,
                drivers_lic: driversLicNo,
                drivers_lic_state: driversLicState,
                citizenship: citizenShip,
                country_born: countryBorn,
                state_born: stateBorn,
                marital_status: martialStatus,
                spouse: spouse,
                entity_type: entityType,
                primary_contact: primaryContact,
                contact_method: contactMethod,
                contact_time: contactTime,
                primary_phone: primaryPhone,
                primary_email: primaryEmail,
                home_primary_address: homePrimaryAddress,
                occupation: occupation,
                employer: employer,
                last_contact: lastContact,
                brand: brand,
                lead_type: leadType,
                referrer: referrer,
                source: source,
                ip_address: ipAddress,
                quoter_url: quoterURL,
                consumertags: tagsList
            },
            {
                include: [consumerTag]
            }
        );
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
                userId: req.userId
                // userId: 1
            },
            include: ["consumertags"]
        });
        return res.status(200).send(consumers);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ errorMsg: "Server Error" });
    }
}

const getSingleConsumer = async (req, res) => {
    try {
        const consumerId = req.params.id
        const consumer = await Consumer.findOne({
            where: {
                id: consumerId
            },
            include: ["consumertags"]
        });
        return res.status(200).send(consumer);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ errorMsg: "Server Error" });
    }
}


const updateConsumer = async (req, res) => {
    try {
        const { consumerId, title, birthDate, gender, heightWeight, tobacco, SSN, driversLicNo, driversLicState, citizenShip, countryBorn, stateBorn, martialStatus, spouse, entityType, primaryContact, contactMethod, contactTime, primaryPhone, primaryEmail, homePrimaryAddress, occupation, employer, createDate, lastContact, brand, leadType, tags, quoterURL, ipAddress, source, referrer, } = req.body;

        await Consumer.update(
            {
                title: title,
                birth_date: birthDate,
                gender: gender,
                height_weight: heightWeight,
                tobacco: tobacco,
                SSN: SSN,
                drivers_lic: driversLicNo,
                drivers_lic_state: driversLicState,
                citizenship: citizenShip,
                country_born: countryBorn,
                state_born: stateBorn,
                marital_status: martialStatus,
                spouse: spouse,
                entity_type: entityType,
                primary_contact: primaryContact,
                contact_method: contactMethod,
                contact_time: contactTime,
                primary_phone: primaryPhone,
                primary_email: primaryEmail,
                home_primary_address: homePrimaryAddress,
                occupation: occupation,
                employer: employer,
                last_contact: lastContact,
                brand: brand,
                lead_type: leadType,
                referrer: referrer,
                source: source,
                ip_address: ipAddress,
                quoter_url: quoterURL,
            },
            {
                where: { id: consumerId }
            }
        );
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

        const consumer = await Consumer.findOne({
            where: { id: id },
        });

        if (!consumer) return res.status(500).json({ errorMsg: "Consumer not deleted" });

        const tagsCount = await consumerTag.destroy({
            where: { consumerId: consumer.id },
        });
        await consumer.destroy();

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
    getAllConsumer,
    getSingleConsumer
};