import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Livro = ({ livros }) => {
  const { livroSlug } = useParams();
  const [livro, setLivro] = useState(
    {
      id: '',
      isbn: '',
      titulo: '',
      slug: '',
      autor: '',
      categoria: '',
      ano: '',
      paginas: '',
      preco: '',
      descricao: ''
    }
  );

  useEffect(() => {
    const livroFiltrado = livros.find(element => element.slug === livroSlug);
    setLivro({ ...livroFiltrado });
  }, [livroSlug, livros]);

  return (
    <main className="principal">
      <div className="pag-livro">
        <h2>{livro.titulo}</h2>
        <div className="livro">
          <img src={'/imagens/capas/' + livro.id + '.jpg'} alt="Thumbnail da capa do livro..." />
          <ul>
            <li>ISBN: {livro.isbn}</li>
            <li>Ano: {livro.ano}</li>
            <li>Páginas: {livro.paginas}</li>
            <li>Preço: R${livro.preco},00</li>
          </ul>
          <hr />
          <h3>Descrição do livro</h3>
          <p>{livro.descricao}</p>
        </div>
      </div>
    </main>
  )
};

export default Livro;