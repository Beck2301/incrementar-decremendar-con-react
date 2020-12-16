import React from "react";
import { useState } from "react";

function Contador() {
  const [contadorValue, actualizarContador] = useState(251);
  const [numeroDediscos, actualizarVeces] = useState(11);

  return (
    <div className="container">
      <h3>Álbumes: {contadorValue}</h3>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          actualizarContador(contadorValue + 1);
        }}
      >
        Incrementar +
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          actualizarContador(contadorValue - 1);
        }}
      >
        Decrementar -{" "}
      </button>

      <button
        className="btn btn-warning m-2"
        onClick={() => {
          actualizarVeces(numeroDediscos + 1);
        }}
      >
        Albúmes dobles++
      </button>
      <p> Albúm que tienen 2 o 3 discos: {numeroDediscos}</p>
      <p> Total discos convertidos: {numeroDediscos + contadorValue}</p>
    </div>
  );
}

export default Contador;
