import { useEffect, useState } from "react";
import api from "../services/api";
import LivroCard from "../components/LivroCard";

export default function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function carregarLivros() {
      try {
        const res = await api.get("/livros"); // chama backend
        setLivros(res.data); // guarda no estado
      } catch (err) {
        console.error("❌ Erro ao buscar livros:", err);
      }
    }

    carregarLivros();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">📚 Lista de Livros</h1>

      {livros.length > 0 ? (
        livros.map(livro => <LivroCard key={livro.id} livro={livro} />)
      ) : (
        <p>Nenhum livro cadastrado.</p>
      )}
    </div>
  );
}
