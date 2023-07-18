const user = require("../models/userModel");

//controllers de usuario

const createUser = (req, res) => {
  let newUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

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

const editUser = "";
const deleteUser = "";
const getAllUsers = "";
const getOneUser = "";

module.exports = {
  createUser,
  editUser,
  deleteUser,
  getAllUsers,
  getOneUser,
};
