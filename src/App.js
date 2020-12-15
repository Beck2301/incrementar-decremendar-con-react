import React from "react";
import { useState } from "react";

function Contador() {
  const [contadorValue, actualizarContador] = useState(76);
  const [numeroDeVeces, actualizarVeces] = useState(0);

  return (
    <div>
      <span>{contadorValue}</span>
      <button
        onClick={() => {
          actualizarContador(contadorValue + 1);
          actualizarVeces(numeroDeVeces + 1);
        }}
      >
        Incrementar +
      </button>
      <button
        onClick={() => {
          actualizarContador(contadorValue - 1);
          actualizarVeces(numeroDeVeces + 1);
        }}
      >
        Decrementar -{" "}
      </button>
    </div>
  );
}

export default Contador;
