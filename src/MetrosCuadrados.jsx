import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInfoContext } from "./infoProvider";


function MetrosCuadrados() {
  const { propiedadElegida, propiedadSeleccionada } = useInfoContext();
  const { metrosCuadrados, setMetrosCuadrados } = useInfoContext();
  const [showAlert, setShowAlert] = useState(false);
  const { propiedades , ubicacion } = useInfoContext(); 
  const [selectedData, setData] = useState()

  useEffect(() => {
    const datosSeleccionados = {
      ubicacion: ubicacion[0], 
      ubicacionText: ubicacion[1],
      metrosCuadrados: metrosCuadrados,
      tipo: propiedadSeleccionada?.tipo,
      factor: propiedadSeleccionada?.factor      
    };
    setData(datosSeleccionados);
  }, [ubicacion, metrosCuadrados, propiedadSeleccionada]);
  

  console.log("esta es la propiedadelegida " + propiedadElegida)

  const handleMetrosCuadradosChange = (event) => {
    const selectedMetrosCuadrados = event.target.value;
    setMetrosCuadrados(selectedMetrosCuadrados);
  };

  const chequear = (event) => {
    const selectedMetrosCuadrados = metrosCuadrados; // Obtenemos los metros cuadrados del contexto
    if (selectedMetrosCuadrados === "") {
      setShowAlert(true)
      event.preventDefault();
    } else {
      
      console.log(selectedData)
    }
  };

  return (
    <>
      <div className="vertical">
        <label htmlFor="metros2">M2</label>
        <input
          className="formPrincipal metrosCuadrados"
          type="number"
          id="metros2"
          min="20"
          max="500"
          value={metrosCuadrados} 
          onChange={handleMetrosCuadradosChange}
          required
          placeholder="M2"
        />
      </div>
      <Link to="/ProductoSeleccionado" state={{ selectedData }}>
  <button onClick={chequear}>Siguiente ⏭</button>
</Link>
      {showAlert && (
        <div className="alert">
          Debe ingresar los metros cuadrados.
        </div>
      )}
    </>
  );
}

export default MetrosCuadrados;


