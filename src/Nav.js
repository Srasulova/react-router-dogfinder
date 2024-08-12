import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {dogs.map((dog) => (
          <li style={{ marginLeft: "7px" }} key={dog.name}>
            <NavLink to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
