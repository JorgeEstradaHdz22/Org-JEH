/*Cruso: React: Como los componentes funcionan Aula 02. Version Uno Proyecto*/
/*Video 02. Registrando Colaborador*/

import './Equipo.css';
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
