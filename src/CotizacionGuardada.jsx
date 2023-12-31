import React, { useEffect, useState } from "react";
import BtnVolver from "./Volver";

function CotizacionGuardada() {
	const [cotizaciones, setCotizaciones] = useState([]);

	useEffect(() => {
		const cotizacionesGuardadas =
			JSON.parse(localStorage.getItem("cotizaciones")) || [];
		setCotizaciones(cotizacionesGuardadas);
	}, []);

	return (
		<div className="container">
			<h1>Historial de Cotizaciones</h1>
			<table className="table table-striped table-hover table-responsive">
				<thead>
					<tr>
						<th className="text-center mobile-column">Fecha y Hora</th>
						<th className="text-center mobile-column">Ubicación</th>
						<th className="text-center mobile-column">Ubicación %</th>
						<th className="text-center mobile-column">Metros</th>
						<th className="text-center mobile-column">Tipo</th>
						<th className="text-center mobile-column">Tipo %</th>
						<th className="text-center mobile-column">Total</th>
					</tr>
				</thead>
				<tbody>
					{cotizaciones.map((cotizacion, index) => (
						<tr key={index}>
							<td className="text-center mobile-column">
								{cotizacion.fecha}
								<p>{cotizacion.hora}</p>
							</td>
							<td className="text-center mobile-column">
								{cotizacion.selectedData.ubicacionText}
							</td>
							<td className="text-center mobile-column">
								{cotizacion.selectedData.ubicacion}
							</td>
							<td className="text-center mobile-column">
								{cotizacion.selectedData.metrosCuadrados}
							</td>
							<td className="text-center mobile-column">
								{cotizacion.selectedData.tipo}
							</td>
							<td className="text-center mobile-column">
								{cotizacion.selectedData.factor}
							</td>
							<td className="text-center mobile-column resultado">
								{cotizacion.resultado.toFixed(2)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<BtnVolver />
		</div>
	);
}

export default CotizacionGuardada;
