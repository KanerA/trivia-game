require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: "root",
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host: "trivia-database",
    dialect: "mysql",
  },
};
