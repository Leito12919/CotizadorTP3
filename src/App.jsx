import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ProductosList from "./ProductosList";
import ProductosDetail from "./ProductoDetail";
import CotizarPoliza from "./CotizarPoliza";
import CotizacionGuardada from "./CotizacionGuardada.jsx";
import BtnVolver from "./Volver.jsx";

function App() {
	return (
		<>
			<Header titulo="Seguros del hogar" />
			<div className="container">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<ProductosList />} />
						<Route path=":id" element={<ProductosDetail />} />
						<Route path="/cotizar" element={<CotizarPoliza />} />
						<Route path="/mostrarcotizacion" element={<CotizacionGuardada />} />
						<Route path="/volver" element={<BtnVolver />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
