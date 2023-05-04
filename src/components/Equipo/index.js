/*Cruso: React: Como los componentes funcionan Aula 01. Creando los equipo*/
/*Video 02. Componente equipo*/

import './Equipo.css';

/*const Equipo = (props) => {
    return <section className="equipo">
        <h3>{props.equipo}</h3>
        <div className="colaboradores">
            
        </div>
    </section>
};

export default Equipo;*/

/*Video 03. Creando equipos*/
//Sin destructuracion
/*const Equipo = (props) => {

    const obj = {
        backgroundColor: props.datos.colorSecundario
    }

    return <section className="equipo" style={obj}>
        <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3>
        <div className="colaboradores"> 
            
        </div>
    </section>
};

export default Equipo;*/

//con Destructuracion
/*const Equipo = (props) => {

    const {titulo,colorPrimario,colorSecundario} = props.datos;

    //por detras del la const anterior sucede lo sig
    const titulo = props.datos.titulo;
    const colorPrimario = props.datos.colorPrimario;
    const colorSecundario = props.datos.colorSecundario;
    

    const obj = { backgroundColor: colorSecundario }

    const estiloTitulo = { borderColor: colorPrimario }

    return <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores"> 
            
        </div>
    </section>
};

export default Equipo;*/


/*Cruso: React: Como los componentes funcionan Aula 01. Creando los equipo*/
/*Video 06. Colaborador*/

import Colaborador from '../Colaborador';

const Equipo = (props) => {

    const {titulo,colorPrimario,colorSecundario} = props.datos;

    const obj = { backgroundColor: colorSecundario }

    const estiloTitulo = { borderColor: colorPrimario }

    return <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores"> 
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section> 
};

export default Equipo;
