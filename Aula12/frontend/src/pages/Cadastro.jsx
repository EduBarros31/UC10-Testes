import { useState } from "react";
import LivroForm from "../components/LivroForm";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [ultimo, setUltimo] = useState(null);
  const navigate = useNavigate(); // para redirecionar após cadastro

  function handleSave(livro) {
    setUltimo(livro);
    // redireciona para a lista de livros
    navigate("/livros");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">➕ Cadastrar Livro</h1>
      <LivroForm onSave={handleSave} />

      {ultimo && (
        <div className="mt-4 p-3 border rounded bg-green-100">
          <strong>Livro cadastrado:</strong> {ultimo.titulo}
        </div>
      )}
    </div>
  );
}
