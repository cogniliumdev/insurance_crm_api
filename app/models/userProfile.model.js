module.exports = (sequelize, Sequelize) => {
    const UserProfile = sequelize.define("user_profile", {
        title: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.STRING
        },
        timezone: {
            type: Sequelize.STRING
        },
        SSN: {
            type: Sequelize.STRING
        },
        TIN: {
            type: Sequelize.STRING
        },
        birth_date: {
            type: Sequelize.STRING
        },
        license_types: {
            type: Sequelize.STRING
        },
        broker_dealer: {
            type: Sequelize.STRING
        },
        relationship_manager: {
            type: Sequelize.STRING
        },
        payment_plan: {
            type: Sequelize.STRING
        },
        comp_level: {
            type: Sequelize.STRING
        },
        subdomain: {
            type: Sequelize.STRING
        },
    });

    return UserProfile;

}

