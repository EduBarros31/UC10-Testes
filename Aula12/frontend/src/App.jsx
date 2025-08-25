import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";
import Livro from "./pages/Livro/Livro.jsx";
import CadastrarLivro from "./pages/CadastrarLivro/CadastrarLivro.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LivroCard from "./components/LivroCard/LivroCard.jsx"

const App = () => {
  return (
    <Router>
      <Header />  {/* Exibe o cabeçalho com navegação */}
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />                       {/* Rota para a página inicial */}
          <Route path="/livro/:id" element={<Livro />} />             {/* Rota para exibir os detalhes de um livro */}
          <Route path="/livro/adicionar" element={<AdicionarLivro />} />  {/* Rota para adicionar um livro */}
          <Route path="/livro/editar/:id" element={<EditarLivro />} />  {/* Rota para editar um livro */}
          <Route path="*" element={<ErrorPage />} />                   {/* Rota para erro 404 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
