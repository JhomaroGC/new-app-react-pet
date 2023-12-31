import React from "react";
import { Link } from "react-router-dom";
import NavItems from "../NavItems/NavItems";

const Navbar = () => {
  const navLinks = [
    { ruta: "/", textoLink: "Home" },
    { ruta: "contador", textoLink: "Contador" },
    { ruta: "inputs", textoLink: "Input" },
  ];
  return (
    <>
      <nav
        class="navbar bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            Franco Kids
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItems navLinks={navLinks} />
            </ul>
            <span class="navbar-text">Contáctanos</span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
