//Levantando el servidor
const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");


//Creación de la variable de ruta
const router = require("./routes/routes");

//Conectando con la base de datos
mongoose
  .connect(
    "mongodb+srv://empresariar:n2B4r75aV8KUp8Mp@cluster0.tz5nnj9.mongodb.net/petStoreDataBase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conexión BD exitosa!"))
  .catch((err) => console.error(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
