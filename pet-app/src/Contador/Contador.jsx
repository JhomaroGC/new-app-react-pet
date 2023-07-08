import React, { useState } from "react";
import PropTypes from "prop-types";

const Contador = ({ value }) => {
  //Este Hook se debe implementar para que el parámetro value que entra, cambie su estado en toda la aplicación
  let [count, setCounter] = useState(value);
  // Esta es una función necesaria para manejar el evento Onclick, solo acepta funciones
  const handleClickAdd = (e) => {
    //necesario para cancelar acciones por defecto del evento click
    e.preventDefault();
    //En estalínea lo que estoy haciendo es actualizar el set del Hook
    setCounter((count += 1));
    //Aqui estoy ingresandio en el DOM el resultado de la operación anterior, por eso cambia el contador
    document.getElementById("add").innerHTML = count;
  };
  
  return (
    <>
      <h3>Contador</h3>
      <h2 id="add">{value}</h2>
      <button type="button" onClick={handleClickAdd}>
        +1
      </button>
    </>
  );
};

export default Contador;

Contador.propTypes = {
  value: PropTypes.number,
};

Contador.defaultProps = {
  value: 0,
};
