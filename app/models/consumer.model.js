module.exports = (sequelize, Sequelize) => {
    const Consumer = sequelize.define("consumer", {

        title: {
            type: Sequelize.STRING
        },
        birth_date: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        height_weight: {
            type: Sequelize.STRING
        },
        tobacco: {
            type: Sequelize.STRING
        },
        SSN: {
            type: Sequelize.STRING
        },
        drivers_lic: {
            type: Sequelize.STRING
        },
        drivers_lic_state: {
            type: Sequelize.STRING
        },
        citizenship: {
            type: Sequelize.STRING
        },
        country_born: {
            type: Sequelize.STRING
        },
        state_born: {
            type: Sequelize.STRING
        },
        marital_status: {
            type: Sequelize.STRING
        },
        spouse: {
            type: Sequelize.STRING
        },
        entity_type: {
            type: Sequelize.STRING
        },
        primary_contact: {
            type: Sequelize.STRING
        },
        contact_method: {
            type: Sequelize.STRING
        },
        contact_time: {
            type: Sequelize.STRING
        },
        primary_phone: {
            type: Sequelize.STRING
        },
        primary_email: {
            type: Sequelize.STRING
        },
        home_primary_address: {
            type: Sequelize.STRING
        },
        occupation: {
            type: Sequelize.STRING
        },
        employer: {
            type: Sequelize.STRING
        },
        last_contact: {
            type: Sequelize.STRING
        },
        tracking_data: {
            type: Sequelize.STRING
        },
        brand: {
            type: Sequelize.STRING
        },
        lead_type: {
            type: Sequelize.STRING
        },
        referrer: {
            type: Sequelize.STRING
        },
        source: {
            type: Sequelize.STRING
        },
        ip_address: {
            type: Sequelize.STRING
        },
        quoter_url: {
            type: Sequelize.STRING
        }
    });
    return Consumer;
}

