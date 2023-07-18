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
router.get("/getAllUsers", async (req, res) => {
  const allUsers = await user.find({});
  res.send(allUsers);
});

//metodo GET: oneUser
router.get("/oneUser/:id", async (req, res) => {
  const idToFind = req.params.id;
  const oneUser = await user.find({ _id: idToFind });
  res.send(oneUser);
});

//metodo DELETE
router.delete("/deleteUser/:id", (req, res) => {
  const idToDelete = req.params.id;
  const deleteUser = async (id) => {
    try {
      await user.findByIdAndDelete({ _id: id });
      res.status(200).send(`Eliminado con exito`);
    } catch (error) {
      res.send(error);
    }
  };

  deleteUser(idToDelete);
});

//metodo PUT-edicion
router.put("/editUser/:id", (req, res) => {
  const idToFind = req.params.id;
  const { body } = req;
  //objeto creado para actualizar

  const updateDocument = async (id, body) => {
    const userToEdit = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    };

    try {
      const updatedResult = await user.findByIdAndUpdate(
        { _id: id },
        userToEdit
      );
      res
        .status(200)
        .send(`Usuario: ${userToEdit.firstName}, actualizado con exito`);
    } catch (error) {
      res.send(error);
    }
  };
  updateDocument(idToFind, body);
});

module.exports = router;
