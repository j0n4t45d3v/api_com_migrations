"use strict";
const express = require("express");
const rotaUser = require("./routes/route-user");
const rotaProduct = require("./routes/route-product");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", rotaUser);
app.use("/products", rotaProduct);

app.listen(port, () => {
  console.log("Servidor rodando...");
});
