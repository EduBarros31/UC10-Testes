// Home.jsx
import { useState } from "react";
import Login from "../../components/login/Login";
import usuarios from "../../data/data"
function Home() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, senha) => {
    // verifica se existe um usuário válido no array
    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuarioEncontrado) {
      setUser(usuarioEncontrado.email);
      alert("Login realizado com sucesso!");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  return (
    <>
      {user ? (
        <h2>Bem-vindo, {user}!</h2>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default Home;
