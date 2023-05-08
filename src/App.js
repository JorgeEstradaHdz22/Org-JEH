/*Cruso: React: Como los componentes funcionan Aula 06. Finalizando el proyecto*/
//Video 01. Refactorizando el formulario

import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from  './components/Header';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: 'Front End',
    foto: 'https://github.com/harlandlohora.png',
    nombre: 'Harland Lohora',
    puesto: 'Instructor'
  },
  {
    id: uuid(),
    equipo: 'Programación',
    foto: 'https://github.com/genesysaluralatam.png',
    nombre: 'Genesys Rondón',
    puesto: 'Desarrolladora de software e instructora'
  },
  {
    id: uuid(),
    equipo: 'UX y Diseño',
    foto: 'https://github.com/JeanmarieAluralatam.png',
    nombre: 'Jeanmarie Quijada',
    puesto: 'Instructora en Alura Latam'
  },
  {
    id: uuid(),
    equipo: 'Programación',
    foto: 'https://github.com/christianpva.png',
    nombre: 'Christian Velasco',
    puesto: 'Head de Alura e Instructor'
  },
  {
    id: uuid(),
    equipo: 'Inovación y Gestión',
    foto: 'https://github.com/JoseDarioGonzalezCha.png',
    nombre: 'Jose Gonzalez',
    puesto: 'Dev FullStack'
  }
  ])

  //Asignación de la funcion uuid() para generar un id unico para el equipo de Programación
  const [equipos,actualizarEquipos] = useState ([
    {
      id: uuid(),
      titulo:'Programación',
      colorPrimario:'#57C278',
      colorSecundario:'#D9F7E9'
    },
    {
      id: uuid(),
      titulo:'Front End',
      colorPrimario:'#82CFFA',
      colorSecundario:'#E8F8FF'
    },
    {
      id: uuid(),
      titulo:'Data Science',
      colorPrimario:'#A6D157',
      colorSecundario:'#F0F8E2'
    },
    {
      id: uuid(),
      titulo:'Devops',
      colorPrimario:'#E06B69',
      colorSecundario:'#FDE7E8'
    },
    {
      id: uuid(),
      titulo:'UX y Diseño',
      colorPrimario:'#DB6EBF',
      colorSecundario:'#FAE9F5'
    },
    {
      id: uuid(),
      titulo:'Móvil',
      colorPrimario:'#FFBA05',
      colorSecundario:'#FFF5D9'
    },
    {
      id: uuid(),
      titulo:'Inovación y Gestión',
      colorPrimario:'#FF8A29',
      colorSecundario:'#FFEEDF'
    }
  ]);

  /*console.log(uuid());*/

  //Ternario -->Condicion ? se muestra : noSeMuestra
  //condición && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log ('Nuevo Colaborador',colaborador);
    actualizarColaboradores([...colaboradores,{...colaborador,id:uuid()}]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador',id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  };

  //Actulaizar el color del Equipo
  const actualizarColor = (color,id) => {
    console.log('Actualizar: ',color,id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  };

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
  }

  return (
    <div>
      <Header />
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo 
          datos={equipo}
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        /> 
        )
      }
      
      <Footer />
    </div>
  );
}

export default App;