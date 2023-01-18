"use strict";
require("dotenv").config();

module.exports = {
  dialect: "mysql",
  host: process.env.HOST,
  username: "root",
  password: process.env.PASSWORD,
  database: "shop",
  define: {
    timestamps: true,
  },
};
