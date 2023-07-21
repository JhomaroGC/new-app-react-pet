const express = require("express");
const router = express.Router();
const user = require("../models/userModel");
const {
  createUser,
  editUser,
  deleteUser,
  getAllUsers,
  getOneUser,
} = require("../controllers/userControllers");

//Metodo GET
router.get("/", (req, res) => {
  res.send("Ruta get en funcionamiento... ");
});

//metodo POST: creacion de un nuevo usuario
router.post("/createUser", createUser);

//metodo GET: getAll
router.get("/getAllUsers", getAllUsers);

//metodo GET: oneUser
router.get("/oneUser/:id", getOneUser);

//metodo DELETE
router.delete("/deleteUser/:id", deleteUser);

//metodo PUT-edicion
router.put("/editUser/:id", editUser);

module.exports = router;
