import {useState} from 'react';
import './App.css';
import Header from  './components/Header';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
