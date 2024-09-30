import "./App.css";
import Inicio from "./pages/Inicio.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderPrincipal from "./components/Header.jsx";
import PiePagina from "./components/PiePagina.jsx";

function App() {
  return (
    <>
      <Router basename="/clinica-dental/">  {/* Cambia BrowserRouter por Router */}
        <HeaderPrincipal />  {/* Siempre visible */}

        <Routes>
          <Route index path="/" element={<Inicio />} />  {/* Ruta principal */}
        </Routes>

        <PiePagina />  {/* Siempre visible */}
      </Router>
    </>
  );
}

export default App;
