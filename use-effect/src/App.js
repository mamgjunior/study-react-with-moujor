import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    document.title = `Título: ${nome}`;
    console.log('Página renderizada');
  }, [nome]);

  return (
    <div
      className="App"
    >
      <h1>UseEffect</h1>
      <input
        type='text'
        placeholder='Nome'
        onChange={(event) => setNome(event.target.value)}
      />
      <input
        type='password'
        placeholder='Senha'
        onChange={(event) => setSenha(event.target.value)}
      />
      <p>Nome: <span>{nome}</span></p>
      <p>Senha: <span>{senha}</span></p>
    </div>
  );
}

export default App;
