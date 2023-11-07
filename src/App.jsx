import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home.jsx";
import ProductoSeleccionado from "./ProductoSeleccionado.jsx";
import CotizarPoliza from "./CotizarPoliza";
import CotizacionGuardada from "./CotizacionGuardada.jsx";
import BtnVolver from "./Volver.jsx";
import MetrosCuadrados from "./MetrosCuadrados.jsx";
import { InfoProvider } from "./infoProvider.jsx";

function App() {
	return (
		<>
		<InfoProvider>
			<Header titulo="Seguros del hogar" />
			<div className="container">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/" element={<MetrosCuadrados />} />
						<Route path="/ProductoSeleccionado" element={<ProductoSeleccionado />} />
						<Route path="/cotizar" element={<CotizarPoliza />} />
						<Route path="/mostrarcotizacion" element={<CotizacionGuardada />} />
						<Route path="/volver" element={<BtnVolver />} />
					</Routes>
				</BrowserRouter>
			</div>
			</InfoProvider>
		</>
	);
}

export default App;
