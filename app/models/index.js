const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    // operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.userProfile = require("../models/userProfile.model.js")(sequelize, Sequelize);
db.phone = require("../models/phone.model.js")(sequelize, Sequelize);
db.email = require("../models/email.model.js")(sequelize, Sequelize);
db.address = require("../models/address.models.js")(sequelize, Sequelize);
db.social = require("../models/social.model.js")(sequelize, Sequelize);
db.consumer = require("./consumer.model.js")(sequelize, Sequelize);
db.consumerTag = require("./consumerTag.model.js")(sequelize, Sequelize);


// Many-to-Many relation/association of User and Role.  
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// One-to-One relation/association of User and UserProfile.  
db.user.hasOne(db.userProfile, { constraints: false });
db.user.belongsTo(db.userProfile);

// One-to-Many relation/association of UserProfile and Phone.
db.userProfile.hasMany(db.phone, { foreignKey: { name: "user_profileId" }, constraints: false });
db.phone.belongsTo(db.userProfile);

// One-to-Many relation/association of UserProfile and email.
db.userProfile.hasMany(db.email, { foreignKey: { name: "user_profileId" }, constraints: false });
db.email.belongsTo(db.userProfile);

// One-to-Many relation/association of UserProfile and address.
db.userProfile.hasMany(db.address, { foreignKey: { name: "user_profileId" }, constraints: false });
db.address.belongsTo(db.userProfile);

// One-to-Many relation/association of UserProfile and social.
db.userProfile.hasMany(db.social, { foreignKey: { name: "user_profileId" }, constraints: false });
db.social.belongsTo(db.userProfile);

// One-to-Many relation/association of user and consumer model.
db.user.hasMany(db.consumer, { constraints: false });
db.consumer.belongsTo(db.user);

// One-to-Many relation/association of consumer and consumerTag model.
db.consumer.hasMany(db.consumerTag, { constraints: false });
db.consumerTag.belongsTo(db.consumer);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
