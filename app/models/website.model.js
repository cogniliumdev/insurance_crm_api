module.exports = (sequelize, Sequelize) => {
    const Website = sequelize.define("website", {
        website: {
            type: Sequelize.STRING
        }
    });
    return Website;
}

