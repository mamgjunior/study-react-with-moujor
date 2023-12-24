import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Menu from './components/Menu';
import TabelaLivros from './components/TabelaLivros';
import CadastrarLivros from './components/CadastrarLivros';
import NotFound from './components/NotFound';


class App extends Component {
  state = {
    livros: JSON.parse(localStorage.getItem('books') || '[]')
  };

  inserirLivro = livro => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro]
    });

    localStorage.clear();
    localStorage.setItem('books', JSON.stringify([...this.state.livros, livro]));
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

    localStorage.clear();
    localStorage.setItem('books', JSON.stringify(this.state.livros.map(element => {
      if (element.isbn === livro.isbn) {
        return { ...livro }
      } else {
        return { ...element }
      }
    })));
  }

  removerLivro = livro => {
    if (window.confirm('Deseja remover este livro?')) {
      this.setState({
        livros: this.state.livros.filter(element => element.isbn !== livro.isbn)
      });

      localStorage.clear();
      localStorage.setItem('books', JSON.stringify(this.state.livros.filter(element => element.isbn !== livro.isbn)));
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
