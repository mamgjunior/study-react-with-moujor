import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const CadastrarLivros = ({
  livros,
  inserirLivro,
  editarLivro
}) => {
  const { isbnLivro } = useParams();
  const [redirecionar, setRedirecionar] = useState(false);
  const [livro, setLivro] = useState(
    {
      id: 0,
      isbn: '',
      titulo: '',
      autor: ''
    }
  );

  const handleLivroForm = (e) => {
    e.preventDefault();

    if (isbnLivro !== '' && isbnLivro !== undefined) {
      editarLivro(livro);
    } else {
      inserirLivro(livro);
    }

    setRedirecionar(true);
  }

  useEffect(() => {
    if (isbnLivro !== '' && isbnLivro !== undefined) {
      setLivro(livros.find(element => element.isbn === isbnLivro));
    }
  }, [isbnLivro, livros])

  if (redirecionar === true) {
    return (
      <Navigate to='/' />
    )
  } else {
    return (
      <form onSubmit={handleLivroForm}>
        <h1>Cadastrar Livro</h1>
        <p>
          <label htmlFor="fisbn">
            ISBN: Formato - (<span style={{ color: 'red' }}>978-85-7522-xxx-x</span>)
          </label>
          <input
            id="fisbn"
            type="text"
            autoFocus
            required
            // pattern="^978-85-7522-[0-9]{3}-[0-9]{1}$"
            value={livro.isbn}
            defaultValue={livro.isbn}
            onChange={e => setLivro(state => {
              return {
                ...state,
                isbn: e.target.value
              }
            })}
          />
        </p>

        <p>
          <label htmlFor="ftitulo">Título</label>
          <input
            id="ftitulo"
            type="text"
            required
            value={livro.titulo}
            defaultValue={livro.titulo}
            onChange={e => setLivro(state => {
              return {
                ...state,
                titulo: e.target.value
              }
            })}
          />
        </p>

        <p>
          <label htmlFor="fautor">Autor</label>
          <input
            id="fautor"
            type="text"
            required
            value={livro.autor}
            defaultValue={livro.autor}
            onChange={e => setLivro(state => {
              return {
                ...state,
                autor: e.target.value
              }
            })}
          />
        </p>

        <p>
          <button type="submit" className="botao cadastrar">Cadastrar</button>
        </p>
      </form>
    )
  }
}

export default CadastrarLivros;