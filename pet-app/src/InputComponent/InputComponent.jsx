import React, { useState } from "react";

const InputComponent = () => {
  //useState que controla el input firstName
  let [firstname, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");

  //Controlando el estado de todo el formulario
  let [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleInputs = (e) => {
    e.preventDefault();
    const { target } = e;
    setInputs({
      ...inputs, //Una copia de los inputs identico a como está
      [target.name]: target.value,
    });
  };

  //   //manejador del input firstName
  //   const handleFirstName = (e) => {
  //     setFirstName(console.log(e.target.value));
  //   };
  //   //manejador del input lastName
  //   const handleLastName = (e) => {
  //     setLastName(console.log(e.target.value));
  //   };
  //   //manejador del input email
  //   const handleEmail = (e) => {
  //     setEmail(console.log(e.target.value));
  //   };
  //manejador botón enviar
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formulario Controlado");
    console.log(inputs);
  };

  return (
    <>
      <div className="container mt-3">
        <form action="" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email addres
            </label>
            <input
              onChange={handleInputs}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              value={inputs.email}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              First Name
            </label>
            <input
              onChange={handleInputs}
              type="text"
              class="form-control"
            //   id="exampleInputEmail1"
              name="firstname"
            //   aria-describedby="emailHelp"
              value={inputs.firstname}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Last Name
            </label>
            <input
              onChange={handleInputs}
              type="text"
              class="form-control"
            //   id="exampleInputEmail1"
              name="lastname"
            //   aria-describedby="emailHelp"
              value={inputs.lastname}
            />
          </div>
          <button type="submit" class="btn btn-outline-primary">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default InputComponent;
