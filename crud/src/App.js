import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import logo from './logo.svg';

import Menu from './components/Menu';
import TabelaLivros from './components/TabelaLivros';
import CadastrarLivros from './components/CadastrarLivros';
import NotFound from './components/NotFound';


class App extends Component {
  state = {
    livros: [
      {
        id: 1,
        isbn: "978-85-7522-403-8",
        titulo: "HTML5 - 2ª Edição",
        autor: "Maurício Samy Silva"
      },
      {
        id: 2,
        isbn: "978-85-7522-807-4",
        titulo: "Introdução ao Pentest",
        autor: "Daniel Moreno"
      },
      {
        id: 3,
        isbn: "978-85-7522-780-8",
        titulo: "Internet das Coisas para Desenvolvedores",
        autor: "Ricardo da Silva Ogliari"
      }
    ]
  };

  inserirLivro = livro => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro]
    });
  }

  editarLivro = livro => {
    this.setState({
      livros: this.state.livros.map(element => {
        if (element.isbn === livro.isbn) {
          return { ...livro }
        } else {
          return { ...element }
        }
      })
    });
  }

  removerLivro = livro => {
    if (window.confirm('Deseja remover este livro?')) {
      this.setState({
        livros: this.state.livros.filter(element => element.isbn !== livro.isbn)
      });
    }
  }


  render() {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route
            path='/'
            element={
              <TabelaLivros
                livros={this.state.livros}
                removerLivro={this.removerLivro}
              />
            }
          />
          <Route
            path='/cadastrar'
            element={
              <CadastrarLivros
                livros={this.state.livros}
                inserirLivro={this.inserirLivro}
                editarLivro={this.editarLivro}
              />
            }
          />
          <Route
            path="/editar/:isbnLivro"
            element={
              <CadastrarLivros
                livros={this.state.livros}
                inserirLivro={this.inserirLivro}
                editarLivro={this.editarLivro}
              />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
