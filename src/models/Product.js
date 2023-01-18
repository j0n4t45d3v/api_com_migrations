"use strict"
const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const Product = connection.define("Product", {
  name: DataTypes.STRING,

  price: DataTypes.REAL,

},{
  tableName: "products"
}
);

module.exports = Product;