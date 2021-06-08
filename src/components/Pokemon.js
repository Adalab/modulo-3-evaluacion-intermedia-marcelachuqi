import React from "react";
import "../stylesheets/style.css";

const Pokemon = (props) => {
  return (
    <div>
      <img className="pokeClass" src={props.src} />
      <p>{props.name}</p>
    </div>
  );
};

export default Pokemon;
