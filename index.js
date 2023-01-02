const express = require("express");
const cors = require("cors");
const userProfileRoutes = require("./app/routes/userProfile.routes.js");
const phoneRoutes = require("./app/routes/phone.routes.js");
const emailRoutes = require("./app/routes/email.routes.js");
const addressRoutes = require("./app/routes/address.routes.js");
const socialRoutes = require("./app/routes/social.routes.js");
const websiteRoutes = require("./app/routes/website.routes.js");
const consumerRoutes = require("./app/routes/consumer.routes.js");
const consumerTagRoutes = require("./app/routes/consumerTag.routes.js");
const assistantRoutes = require("./app/routes/assistant.routes.js");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
app.use("/api/userProfile", userProfileRoutes);
app.use("/api/phone", phoneRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/social", socialRoutes);
app.use("/api/consumer", consumerRoutes);
app.use("/api/consumerTag", consumerTagRoutes);
app.use("/api/assistant", assistantRoutes);
app.use("/api/website", websiteRoutes);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function initial() {
  await Role.create({
    id: 1,
    name: "user"
  });

  await Role.create({
    id: 2,
    name: "moderator"
  });

  await Role.create({
    id: 3,
    name: "admin"
  });
}