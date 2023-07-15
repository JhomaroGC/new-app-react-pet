export const findUser = async function findUser(user, newUser, res) {
  const source = await user.findOne({ email: newUser.email });
  if (source) {
    res.send("El usuario ya existe");
  } else {
    newUser.save();
    res.status(200).send(`Usuario creado con Exito: ${newUser}`);
  }
};

