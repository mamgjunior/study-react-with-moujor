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


function App() {
  return (
    <Router>
      <>
        <Topo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/frontend' element={<Frontend />} />
          <Route path='/programacao' element={<Programacao />} />
          <Route path='/design' element={<Design />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
