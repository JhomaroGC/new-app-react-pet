import React from "react";
import { Outlet } from "react-router-dom";
//CSS propio para este componente
import "./App.css";
//importo los componentes que quiero mostrar en este componente
import Navbar from "./Navbar/Navbar";
// para validar los datos que vienen como parámetros para el componente
import PropTypes from "prop-types";

//Logica del componente que vamos a renderizar
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
};

//Aqui exporto la función para usar en otros módulos
export default App;

//Declaración de los proptipes para validar tipos de datos que vienen como parámetros.
App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: "sin-nombre",
};
