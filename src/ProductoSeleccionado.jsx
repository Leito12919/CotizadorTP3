import { useLocation, Link } from "react-router-dom";
import BtnVolver from "./Volver";
function ProductoSeleccionado() {
  const location = useLocation();
  const selectedData = location.state.selectedData;

  console.log(selectedData)



  return (
    <div className="main">
      <table className="table table-striped table-hover table-responsive table center">
        <thead>
          <tr>
            <th className="text-center">Ubicación</th>
            <th className="text-center"> %</th>
            <th className="text-center">Tipo</th>
            <th className="text-center">%</th>
            <th className="text-center">M2</th>
            <th className="text-center">Calcular</th>
          </tr>
        </thead>
        <tbody>
        <tr>
  <td className="text-center">{selectedData.ubicacionText}</td>
  <td className="text-center">{selectedData.ubicacion}</td>
  <td className="text-center">{selectedData.tipo}</td>
  <td className="text-center">{selectedData.factor}</td>
  <td className="text-center">{selectedData.metrosCuadrados}</td>
  <td className="text-center">
    <Link to="/cotizar" state={{ selectedData }}>
      <button className="buttonCotizacion">
        Cotizar
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </Link>
  </td>
</tr>

        </tbody>
      </table>
      <BtnVolver />
    
    </div>
  );
}

export default ProductoSeleccionado;
