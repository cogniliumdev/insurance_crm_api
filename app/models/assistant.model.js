module.exports = (sequelize, Sequelize) => {
    const Assistant = sequelize.define("assistant", {
        name: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
    });

    return Assistant;

}


