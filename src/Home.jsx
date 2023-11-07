import React, { useState } from "react";
import { Link } from "react-router-dom";
import MetrosCuadrados from "./MetrosCuadrados";
import { useInfoContext } from "./infoProvider";
import Ubicacion from "./Ubicacion";

function Home() {
  const { propiedades, propiedadSeleccionada, setPropiedadSeleccionada } = useInfoContext();

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    const selectedData = propiedades.find((propiedad) => propiedad.id === selectedId);

    if (selectedData) {
      // Actualiza propiedadSeleccionada con el valor de selectedData
      setPropiedadSeleccionada(selectedData);
      console.log("Propiedad seleccionada:", selectedData);
    } else {
      console.log("Ninguna propiedad cumple con la condición.");
    }
  };

  // Resto de tu código

  return (
    <>
      <h1>Seleccione el tipo de propiedad</h1>
      <Link to="/mostrarcotizacion">
        <button> Cotizaciones guardadas</button>
      </Link>
      <div className="main">
        <div className="vertical">
          <label htmlFor="tipoPropiedad">Tipo de Propiedad</label>
          <select className="formPrincipal" id="tipoPropiedad" onChange={handleSelectChange}>
            {propiedades.map((propiedad) => (
              <option key={propiedad.id} value={propiedad.id}>
                {propiedad.tipo}
              </option>
            ))}
          </select>
        </div>
        <Ubicacion />
        <MetrosCuadrados />
      </div>
    </>
  );
}

export default Home;
