/*Cruso: React: Como los componentes funcionan Aula 03. ¿Que son los componentes?*/

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

  //Video 03. Enviando prop
  //Eliminar colaborador
  //Funcion para eliminar las cards de los colaboradores
  const eliminarColaborador = () => {
    console.log('Eliminar colaborador');//Lo que se muestra despues de disparar el evento que esta dentro del componente Colaborador
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
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}/*Hacemos uso de .filter para que los colaboradores solo aparezcan en los equipos a los que pertencen*/
          //Video 03. Enviando prop
          eliminarColaborador={eliminarColaborador}//Envio de la funcion eliminarColaborador mediante una prop hacia el componente Equipo
        /> 
        )
      }

      <Footer />
    </div>
  );
}

export default App;