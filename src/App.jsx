import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/pages/login";
import Home from "./assets/pages/Home";
import Contatos from "./assets/pages/Contatos";
import Produtos from "./assets/pages/Produtos";
import Sobre from "./assets/pages/Sobre";
import CadastroPersona from "./assets/pages/CadastroPersona";
import CadastroCorp from "./assets/pages/CadastroCorp";
import DashBoard from "./assets/pages/DashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-persona" element={<CadastroPersona />} />
          <Route path="/cadastro-corp" element={<CadastroCorp />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
