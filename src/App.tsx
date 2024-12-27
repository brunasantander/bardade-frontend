import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./pages/home/home";
// import { CorpoDocentePage } from "./pages/pedidos/corpo-docente-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/pedidos" element={<CorpoDocentePage />} />
          <Route path="/mesa" element={<></>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
