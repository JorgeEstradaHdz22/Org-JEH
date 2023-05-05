/*Cruso: React: Como los componentes funcionan Aula 04. ¿Cómo React ve un componente?*/

import {useState} from 'react';
import './App.css';
import Header from  './components/Header';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores] = useState([{
    equipo: 'Front End',
    foto: 'https://github.com/harlandlohora.png',
    nombre: 'Harland Lohora',
    puesto: 'Instructor'
  },
  {
    equipo: 'Programación',
    foto: 'https://github.com/genesysaluralatam.png',
    nombre: 'Genesys Rondón',
    puesto: 'Desarrolladora de software e instructora'
  },
  {
    equipo: 'UX y Diseño',
    foto: 'https://github.com/JeanmarieAluralatam.png',
    nombre: 'Jeanmarie Quijada',
    puesto: 'Instructora en Alura Latam'
  },
  {
    equipo: 'Programación',
    foto: 'https://github.com/christianpva.png',
    nombre: 'Christian Velasco',
    puesto: 'Head de Alura e Instructor'
  },
  {
    equipo: 'Inovación y Gestión',
    foto: 'https://github.com/JoseDarioGonzalezCha.png',
    nombre: 'Jose Gonzalez',
    puesto: 'Dev FullStack'
  }
  ])
  //Ternario -->Condicion ? se muestra : noSeMuestra
  //condición && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log ('Nuevo Colaborador',colaborador);
    actualizarColaboradores([...colaboradores,colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = () => {
    console.log('Eliminar colaborador');
  };

  //Lista Equipos (Array)
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

      {
        equipos.map((equipo) => <Equipo 
          datos={equipo}
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
        /> 
        )
      }
      
      <Footer />
    </div>
  );
}

export default App;