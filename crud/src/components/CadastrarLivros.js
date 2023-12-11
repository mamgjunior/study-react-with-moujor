import React, { Component } from "react";

class CadastrarLivros extends Component {
  render() {
    return (
      <form>
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
            pattern="^978-85-7522-[0-9]{3}-[0-9]{1}$"
          />
        </p>

        <p>
          <label htmlFor="ftitulo">Título</label>
          <input id="ftitulo" type="text" required />
        </p>

        <p>
          <label htmlFor="fautor">Autor</label>
          <input id="fautor" type="text" required />
        </p>

        <p>
          <button type="submit" className="botao cadastrar">Cadastrar</button>
        </p>
      </form>
    )
  }
}

export default CadastrarLivros;