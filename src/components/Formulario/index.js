/*Cruso: React: Como los componentes funcionan Aula 01. Creando los equipo*/
/*Video 05. Refactorizando el código*/

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

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log('Manejar Envio');
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar)
    };

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
                equipos={props.equipos}/*Recibimos mediante props y se lo enviamos a Lista Opciones*/
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
};

export default Formulario;