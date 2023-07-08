import React from "react";
import "./App.css";
import Contador from "./Contador/Contador";
import PropTypes from "prop-types";

const App = ({ name }) => {
  console.log(name);
  const petStore = <h1 className="titulo">Pet Store, {name}</h1>;
  return (
    <>
      {petStore}
      <Contador />
    </>
  );
};

export default App;

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  nomnre: "sin-nombre",
};
