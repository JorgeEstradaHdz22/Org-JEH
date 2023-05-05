/*Cruso: React: Como los componentes funcionan Aula 02. Version Uno Proyecto*/
/*Video 03. Mostrando Colaboradores*/

import './Equipo.css';
import Colaborador from '../Colaborador';

const Equipo = (props) => {

    const {titulo,colorPrimario,colorSecundario} = props.datos;
    const {colaboradores} = props;
    const obj = { backgroundColor: colorSecundario };
    const estiloTitulo = { borderColor: colorPrimario };
    console.log(colaboradores.length > 0);

    /*Video 04. Filtrando Equipos*/
    return <>
        {
            colaboradores.length > 0 &&
                <section className="equipo" style={obj}>
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className="colaboradores"> 
                        {/*<Colaborador />*/}
                        {   /*Video 05. Color de fondo equipo*/
                            colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario}/>)
                        }
                    </div>
                </section>
        }
    </>
    /*Usamos los fragments <></> para evitar error alguno al colocar la condicion, la condicion se coloca para evitar que los equipos que no tienen colaboradores se muestren en la pantalla*/
};

export default Equipo;
