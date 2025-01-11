import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./pages/home/home";
import { Orders } from "./pages/pedidos/pedidos";
import { Mesas } from "./pages/mesa/mesa";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Orders />} />
          <Route path="/mesa" element={<Mesas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
