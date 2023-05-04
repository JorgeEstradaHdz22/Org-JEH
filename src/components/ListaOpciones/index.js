/*Cruso: React: Como los componentes funcionan Aula 01. Creando los equipo*/
/*Video 05. Refactorizando el código*/

import './ListaOpciones.css';

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        console.log('Cambio',e.target.value);
        props.actualizarEquipo(e.target.value);
    };

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value='' disabled defaultValue='' hidden>Seleccionar Equipo</option>
            {props.equipos.map((equipo,index) => <option key={index} value={equipo}>{equipo}</option>)}{/*Hacemos props.equipos.map para enviarle los titulos a nuestros option, estos vienen de Formulario que es el padre del componente ListaOpciones*/}
        </select>
    </div>
};

export default ListaOpciones;