function Ubicacion(props) {
  const ubicaciones = [
    { key: "1", value: "1.13", text: "CABA" },
    { key: "2", value: "1.04", text: "Tandil" },
    { key: "3", value: "1.29", text: "Costa Atlántica" },
    { key: "4", value: "1.00", text: "Patagonia" },
  ];

  return (
    <>
    <div className="vertical">
    <label htmlFor="ubicacion">Ubicación</label>
    <select className="formPrincipal"
      value={props.ubicacion}
      onChange={props.onChange}
      id="ubicacion"
    >
    
      {ubicaciones.map((ubicacion) => (
        <option
          key={ubicacion.key}
          value={ubicacion.value}
          data-text={ubicacion.text}
        >
          {ubicacion.text}

        </option>
      ))}
    </select>
    </div>
    </>
  );
}

export default Ubicacion;
