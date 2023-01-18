"use strict";
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/config-db");

const connection = new Sequelize(dbConfig);

connection
  .sync()
  .then(() => {
    console.log("db connectado");
  })
  .catch((err) => console.log(err));

module.exports = connection;
