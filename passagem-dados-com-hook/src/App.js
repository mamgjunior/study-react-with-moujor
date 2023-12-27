import { useState } from 'react';
import EntradaDado from './components/EntradaDado';
import SaidaDado from './components/SaidaDado';

import './App.css';

function App() {
  const [userName, setUserName] = useState('Marcos');

  return (
    <>
      <EntradaDado userName={userName} setUserName={setUserName} />
      <SaidaDado userName={userName} />
    </>
  );
}

export default App;
