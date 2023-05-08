/*Cruso: React: Como los componentes funcionan Aula 06. Finalizando el proyecto*/

import {useState} from "react";
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = (props) =>{

    const [nombre,actualizarNombre] = useState('');
    const [puesto,actualizarPuesto] = useState('');
    const [foto,actualizarFoto] = useState('');
    const [equipo,actualizarEquipo] = useState('');

    const [titulo,actualizarTitulo] = useState('');
    const [color,actualizarColor] = useState('');
    //Video 05.Creando Equipo
    const {registrarColaborador,crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log('Manejar Envio');
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    };

    //Envio a app.js
    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        /*console.log(titulo,color)*/
        crearEquipo({titulo,colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo='Nombre'
                placeholder='Ingresar Nombre'
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo='Puesto'
                placeholder='Ingresar Puesto'
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo='Foto'
                placeholder='Ingresar Foto'
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        {/*Video 05.Creando Equipo
        Creacion del segundo formulario*/}
        <form onSubmit={manejarNuevoEquipo} >
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo='Titulo'
                placeholder='Ingresar Titulo'
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
                titulo='Color'
                placeholder='Ingresar el color en Hex'
                required
                valor={color}
                actualizarValor={actualizarColor}
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
};

export default Formulario;