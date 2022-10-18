module.exports = (sequelize, Sequelize) => {
    const ConsumerTags = sequelize.define("consumertag", {
        tag: {
            type: Sequelize.STRING
        }
    });
    return ConsumerTags
};