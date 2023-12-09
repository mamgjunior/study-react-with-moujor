import React, { Component } from 'react';

import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';

import Topo from './components/Topo';
import Home from './components/Home';
import Frontend from './components/Frontend';
import Programacao from './components/Programacao';
import Design from './components/Design';
import Catalogo from './components/Catalogo';
import NotFound from './components/NotFound';

import axios from 'axios';
import Livro from './components/Livro';


class App extends Component {
  state = {
    livros: [],
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get('/api/todosOsLivros.json');
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document.querySelectorAll('.principal')[0].insertAdjacentHTML('beforeend', '<p class="erro">Mensagem de erro</p>');
    }
  }

  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route path='/' element={<Home livros={this.state.livros} />} />
          <Route path='/frontend' element={<Frontend livros={this.state.livros} />} />
          <Route path='/programacao' element={<Programacao livros={this.state.livros} />} />
          <Route path='/design' element={<Design livros={this.state.livros} />} />
          <Route path='/catalogo' element={<Catalogo livros={this.state.livros} />} />
          <Route path='/livro/:livroSlug' element={(props) => {
            console.log('aqui');
            const livro = this.state.livros.find(livro => livro.slug === props.match.params.livroSlug);
            if (livro) return <Livro livros={this.state.livros} />;
            else return <NotFound />;
          }} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
