module.exports = {
  HOST: "mysqldb.cmjlh63242ln.us-east-2.rds.amazonaws.com", //"localhost",
  USER: "root",
  PASSWORD: "pakistan123", // null,
  DB: "insure_io_db", //"testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
