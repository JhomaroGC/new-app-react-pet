//Levantando el servidor
const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");

//importamos los modelos
const user = require("./models/userModel");

//Creación de la variable de ruta
const router = express.Router();
//Conectando con la base de datos
mongoose.connect(
  "mongodb+srv://app-ecommerce:dAArpRZOJTF375Nc@cluster0.b3pvswg.mongodb.net/appecommerce?retryWrites=true&w=majority"
);

//Metodo GET
router.get("/", (req, res) => {
  res.send("Ruta get en funcionamiento... ");
});

//metodo POST: creacion de un nuevo usuario
router.post("/createUser", (req, res) => {
  let newUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  async function findUser(user, newUser, res) {
    const source = await user.findOne({ email: newUser.email });
    if (source) {
      res.send("El usuario ya existe");
    } else {
      newUser.save();
      res.status(200).send(`Usuario creado con Exito: ${newUser}`);
    }
  }

  findUser(user, newUser, res);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
