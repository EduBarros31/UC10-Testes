import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold hover:text-gray-400">Home</Link>
        <Link to="/livro/adicionar" className="text-xl font-semibold hover:text-gray-400">Adicionar Livro</Link>
      </nav>
    </header>
  );
};

export default Header;
