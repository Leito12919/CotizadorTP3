import React, { createContext, useContext, useState, useEffect } from 'react';


const InfoContext = createContext();

export function useInfoContext() {
  return useContext(InfoContext);
}

export function InfoProvider({ children }) {
  const [metrosCuadrados, setMetrosCuadrados] = useState("");
  const [ubicacion, setUbicacion] = useState({ key: "1", value: "1.13", text: "CABA" });
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState();
  const [propiedades, setPropiedades] = useState([]);



  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((res) => res.json())
      .then((datos) => {
        function transformarDatos(datos) {
          return datos.map((propiedad) => ({
            id: propiedad.id,
            tipo: propiedad.tipo,
            factor: propiedad.factor,
          }));
        }
          const datosTransformados = transformarDatos(datos);
          setPropiedades(datosTransformados);
      });
  }, []);
  



  return (
    <InfoContext.Provider value={{ propiedades,setPropiedades, propiedadSeleccionada, setPropiedadSeleccionada, ubicacion, setUbicacion, metrosCuadrados, setMetrosCuadrados }}>
      {children}
    </InfoContext.Provider>
  );
}
