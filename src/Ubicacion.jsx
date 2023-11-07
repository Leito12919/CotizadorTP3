import React from 'react';
import { useInfoContext } from './infoProvider';

let selectedUbicacionValue=0
function Ubicacion() {
  const { ubicacion, setUbicacion } = useInfoContext();
  
  const ubicaciones = [
    { key: "1", value: "1.13", text: "CABA" },
    { key: "2", value: "1.04", text: "Tandil" },
    { key: "3", value: "1.29", text: "Costa Atlántica" },
    { key: "4", value: "1.00", text: "Patagonia" },
  ];
  const handleUbicacionChange = (event) => {
    selectedUbicacionValue = event.target.value
    const selectedUbicacionText = event.target.options[event.target.selectedIndex].text;
    const ubicacionValueText = [selectedUbicacionValue,selectedUbicacionText]
    setUbicacion(ubicacionValueText);
  };


  return (
    <>
      <div className="vertical">
        <label htmlFor="ubicacion">Ubicación</label>
        <select
          className="formPrincipal"
          value={ubicacion[0] === undefined ? "CABA" : ubicacion[0]}
          onChange={handleUbicacionChange}
          id="ubicacion"
        >
          {ubicaciones.map((ubicado) => (
            <option
              key={ubicado.key}
              value={ubicado.value}
              data-text={ubicado}
            >
              {ubicado.text}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Ubicacion;
