require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.SQL_DEV_PASSWORD,
    database: process.env.SQL_DEV_DATABASE,
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: "root",
    password: "A$$af14",
    database: "trivia",
    dialect: "mysql",
    dialectOptions: {
      socketPath: "/cloudsql/trivia-game-312813:europe-west3:cloud-sql",
    },
  },
};
