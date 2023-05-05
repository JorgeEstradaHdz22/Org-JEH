/*Cruso: React: Como los componentes funcionan Aula 02. Version Uno Proyecto*/

import {useState} from 'react';
import './App.css';
import Header from  './components/Header';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(false);

  /*Video 06. Footer Creacion de un objeto para que aparezca por defecto cierto colaborador*/
  const [colaboradores,actualizarColaboradores] = useState([{
    nombre: 'Jorge Estrada',
    puesto: 'Estudiante',
    foto: 'https://github.com/JorgeEstradaHdz22.png',
    equipo: 'Front End'
  }])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  /*Video 02. Registrando Colaborador*/
  //Registrar Colaborador

  const registrarColaborador = (colaborador) => {
    console.log ('Nuevo Colaborador',colaborador);
    //Spread operator crea una copia de los calores actulaes u agrega colaborador
    actualizarColaboradores([...colaboradores,colaborador]);
  }
  
  const equipos = [
    {
      titulo:'Programación',
      colorPrimario:'#57C278',
      colorSecundario:'#D9F7E9'
    },
    {
      titulo:'Front End',
      colorPrimario:'#82CFFA',
      colorSecundario:'#E8F8FF'
    },
    {
      titulo:'Data Science',
      colorPrimario:'#A6D157',
      colorSecundario:'#F0F8E2'
    },
    {
      titulo:'Devops',
      colorPrimario:'#E06B69',
      colorSecundario:'#FDE7E8'
    },
    {
      titulo:'UX y Diseño',
      colorPrimario:'#DB6EBF',
      colorSecundario:'#FAE9F5'
    },
    {
      titulo:'Móvil',
      colorPrimario:'#FFBA05',
      colorSecundario:'#FFF5D9'
    },
    {
      titulo:'Inovación y Gestión',
      colorPrimario:'#FF8A29',
      colorSecundario:'#FFEEDF'
    }
  ];

  return (
    <div>
      <Header />
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {/*Video 03. Mostrando Colaboradores*/}

      {/*Video 04. Filtrando Equipos*/}
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo}
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}/*Hacemos uso de .filter para que los colaboradores solo aparezcan en los equipos a los que pertencen*/
        />
        )
      }

      {/*Video 06. Footer*/}

      <Footer />
    </div>
  );
}

export default App;