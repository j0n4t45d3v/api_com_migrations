"use strict"
const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const User = connection.define("User", {
  name: DataTypes.STRING,

  email: DataTypes.STRING,

  password: DataTypes.STRING,
},{
  tableName: "users"
}
);

module.exports = User;
