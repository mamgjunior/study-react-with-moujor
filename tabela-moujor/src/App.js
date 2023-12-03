import React, { Component } from "react";

import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody";


class App extends Component {
  state = {
    livros: []
  };

  componentDidMount() {
    fetch('/api/livros.json')
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function (error) {
        console.log('Erro na requisição');
      })
      .finally(function () {
        console.log('Sempre retorna');
      })
  }

  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(element => element.id !== id);
    this.setState({ livros });
  };

  handleOrdenarCrescente = (pValue) => {
    let livros = [];

    switch (pValue) {
      case 'ISBN': {
        livros = this.state.livros.sort((a, b) => a.id < b.id ? -1 : 0);
        break;
      }

      case 'Título': {
        livros = this.state.livros.sort((a, b) => a.titulo < b.titulo ? -1 : 0);
        break;
      }

      case 'Autor': {
        livros = this.state.livros.sort((a, b) => a.autor < b.autor ? -1 : 0);
        break;
      }

      default: {
        livros = [];
        break;
      }
    }
    this.setState({ livros });
  }

  handleOrdenarDecrescente = (pValue) => {
    let livros = [];

    switch (pValue) {
      case 'ISBN': {
        livros = this.state.livros.sort((a, b) => a.id < b.id ? -1 : 0);
        break;
      }

      case 'Título': {
        livros = this.state.livros.sort((a, b) => a.titulo < b.titulo ? -1 : 0);
        break;
      }

      case 'Autor': {
        livros = this.state.livros.sort((a, b) => a.autor < b.autor ? -1 : 0);
        break;
      }

      default: {
        livros = [];
        break;
      }
    }

    livros.reverse();
    this.setState({ livros });
  }

  render() {
    return (
      <table
        className="tabela"
      >
        <TabelaHead
          ordenarCrescente={this.handleOrdenarCrescente}
          ordenarDecrescente={this.handleOrdenarDecrescente}
        />

        <TabelaFoot
          qtdeLivros={this.state.livros.length}
        />

        <TabelaBody
          livros={this.state.livros}
          removerLinha={this.handleRemoverLinha}
        />
      </table>
    );
  }
};

export default App;
