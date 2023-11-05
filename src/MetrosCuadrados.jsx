import React from "react";

function MetrosCuadrados(props) {
  return (
    <div className="vertical">
    <label htmlFor="metros2" >M2</label>
    <input className="formPrincipal metrosCuadrados"
      type="number"
      id="metros2"
      value={props.metrosCuadrados}
      min="20"
      max="500"
      onChange={props.onChange}
      required
      placeholder="M2"
    />
    </div>
  );
}

export default MetrosCuadrados;

