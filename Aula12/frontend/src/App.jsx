import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Livros from "./pages/Livros";
import Cadastro from "./pages/Cadastro";
import Head from "./components/Head/Head.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LivroCard from "./components/LivroCard/LivroCard.jsx"


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <Head />

      {/* Menu de navegação */}
      <nav className="bg-gray-200 p-3 flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/livros" className="hover:underline">Livros</Link>
        <Link to="/cadastro" className="hover:underline">Cadastro</Link>
      </nav>

      {/* Área principal */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
