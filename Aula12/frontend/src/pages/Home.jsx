import { useEffect, useState } from "react";
import api from "../services/api";
import Head from "../components/Head";
import Footer from "../components/Footer";
import LivroCard from "../components/LivroCard";
import LivroForm from "../components/LivroForm";

export default function Home() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    api.get("/livros").then(res => setLivros(res.data));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Head />
      <main className="flex-1 p-6">
        <h1 className="text-2xl mb-4">Gerenciamento de Livros</h1>
        <LivroForm onSave={livro => setLivros([...livros, livro])} />
        <div>
          {livros.map(l => <LivroCard key={l.id} livro={l} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}
