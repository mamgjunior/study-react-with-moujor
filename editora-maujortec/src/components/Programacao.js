import React from 'react';
import { Link } from 'react-router-dom';

const Programacao = ({ livros }) => (
  <main className='principal'>
    <h2>Categoria Programação</h2>
    {
      livros
        .filter(element => element.categoria === 'programacao')
        .map(livro => (
          <div
            key={livro.id}
            className="card"
          >
            <div className='thumb'>
              <img src={'/imagens/capas/' + livro.id + '.jpg'} alt="Thumbnail da capa do livro..." />
            </div>
            {
              livros
                .filter(element => element.slug === livro.slug)
                .map(livro => (
                  <span key={livro.id}>
                    <Link to={`/livro/${livro.slug}`}>
                      {
                        <div className='detalhes'>
                          <h3>{livro.titulo}</h3>
                          <p>{livro.descricao.slice(0, 130) + '...'}</p>
                          <p>Leia mais &gt;</p>
                        </div>
                      }
                    </Link>
                  </span>
                ))
            }
          </div>
        ))
    }
  </main>
);

export default Programacao;