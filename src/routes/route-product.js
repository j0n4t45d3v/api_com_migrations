"use strict";
const { Router } = require("express");
const Product = require("../models/Product");

const route = Router();

route.post("/cadastro", async (req, res) => {
  const { name, price } = req.body;

  try {
    await Product.create({
      name,
      price,
    });
    res.status(201).json({ message: "Produto criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

route.get("/", async (req, res) => {
  try {
    const users = await Product.findAll({});
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = route;
