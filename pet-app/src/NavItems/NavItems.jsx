import React from "react";
import { Link } from "react-router-dom";

const NavItems = ({ navLinks }) => {
  return navLinks.map((item) => {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={item.ruta}>
          {item.textoLink}
        </Link>
      </li>
    );
  });
};

export default NavItems;
