"use strict";
const { Router } = require("express");
const User = require("../models/User");

const route = Router();

route.post("/cadastro", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({ message: "Usuario criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

route.get("/", async (req, res) => {
  try {
    const users = await User.findAll({});
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = route;
