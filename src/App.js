/*Cruso: React: Como los componentes funcionan Aula 04. ¿Cómo React ve un componente?*/
//Video 03. Actulizar Equipos

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

  //Video 05. Actulizando Color
  const [equipos,actulizarEquipos] = useState ([
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
  ]);

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

  //Actulaizar el color del Equipo
  //Creacion de la funcion actualizarColor
  //Video 05. Actulizando Color
  //Modificacion de la funcion recorriendo el arreglo que esta en el estado
  const actualizarColor = (color,titulo) => {
    console.log('Actualizar: ',color,titulo)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actulizarEquipos(equiposActualizados)
  };

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
          actualizarColor={actualizarColor}//Envio de la funcion actulizarColor mediante props al componente Equipo 
        /> 
        )
      }
      
      <Footer />
    </div>
  );
}

export default App;