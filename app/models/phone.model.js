module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        phone: {
            type: Sequelize.STRING
        }
    });
    return Phone;
}

