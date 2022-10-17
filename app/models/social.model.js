module.exports = (sequelize, Sequelize) => {
    const Social = sequelize.define("social", {
        social: {
            type: Sequelize.STRING
        }
    });
    return Social;
}

