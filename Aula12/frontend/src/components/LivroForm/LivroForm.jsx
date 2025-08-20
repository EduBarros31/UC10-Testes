import { useState } from "react";
import api from "../services/api";

export default function LivroForm({ onSave }) {
  const [form, setForm] = useState({
    titulo: "",
    autor: "",
    ano_publicacao: "",
    preco: ""
  });

  const [erro, setErro] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // validação simples
    if (!form.titulo || !form.autor || !form.ano_publicacao || !form.preco) {
      setErro("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const res = await api.post("/livros", {
        titulo: form.titulo,
        autor: form.autor,
        ano_publicacao: Number(form.ano_publicacao),
        preco: Number(form.preco)
      });

      onSave(res.data); // chama função do parent (Cadastro.jsx)
      setForm({ titulo: "", autor: "", ano_publicacao: "", preco: "" }); // limpa formulário
      setErro("");
    } catch (err) {
      console.error("Erro ao criar livro:", err);
      setErro("Não foi possível cadastrar o livro.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      {erro && <p className="text-red-600 mb-2">{erro}</p>}
      
      <input
        type="text"
        name="titulo"
        value={form.titulo}
        onChange={handleChange}
        placeholder="Título"
        className="block w-full p-2 mb-2 border rounded"
      />

      <input
        type="text"
        name="autor"
        value={form.autor}
        onChange={handleChange}
        placeholder="Autor"
        className="block w-full p-2 mb-2 border rounded"
      />

      <input
        type="number"
        name="ano_publicacao"
        value={form.ano_publicacao}
        onChange={handleChange}
        placeholder="Ano de publicação"
        className="block w-full p-2 mb-2 border rounded"
      />

      <input
        type="number"
        step="0.01"
        name="preco"
        value={form.preco}
        onChange={handleChange}
        placeholder="Preço"
        className="block w-full p-2 mb-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Salvar
      </button>
    </form>
  );
}
