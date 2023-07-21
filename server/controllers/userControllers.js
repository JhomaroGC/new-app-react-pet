const user = require("../models/userModel");

//Funciones CRUD Usuarios

//Create
const createUser = (req, res) => {
  let newUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  //FindOne
  async function findUser(user, newUser, res) {
    const userFinded = await user.findOne({ email: newUser.email });
    if (userFinded) {
      res.send("El usuario ya existe");
    } else {
      newUser.save();
      res.status(200).send(`Usuario creado con Exito: ${newUser}`);
    }
  }

  findUser(user, newUser, res);
};

//Edit User
const editUser = (req, res) => {
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
};

//Delete User
const deleteUser = (req, res) => {
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
};

//GetAllUsers
const getAllUsers = async (req, res) => {
  const allUsers = await user.find({});
  res.send(allUsers);
};

const getOneUser = async (req, res) => {
  const idToFind = req.params.id;
  const oneUser = await user.find({ _id: idToFind });
  res.send(oneUser);
};

module.exports = {
  createUser,
  editUser,
  deleteUser,
  getAllUsers,
  getOneUser,
};
