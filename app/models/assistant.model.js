module.exports = (sequelize, Sequelize) => {
    const Consumer = sequelize.define("consumer", {
        name: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        last_contact:{
            type: Sequelize.STRING
        },
        tracking_data:{
            type: Sequelize.STRING
        },
        brand:{
            type: Sequelize.STRING
        },
        lead_type:{
            type: Sequelize.STRING
        },
        referrer:{
            type: Sequelize.STRING
        },
        source:{
            type: Sequelize.STRING
        },
        ip_address:{
            type: Sequelize.STRING
        },
        quoter_url:{
            type: Sequelize.STRING
        }
    });
    return Consumer;
}

