import React from "react";
import Header from "./header/Header.css";
import hogwards from '../assets/img/Castillo de Hogwarts de la franquicia de Harry Potter.jpeg';

function Seccion() {
  return (
    <section className="seccion">
      <h2>Información sobre Hogwarts</h2>
      <p>La escuela de magia y hechicería de Hogwarts es un lugar mágico....</p>

      <img src={hogwards} alt="Hogwards" />
    </section>
  )
}

export default Seccion;
