/*Curso: React: Como los componentes funcionan Aula 03. ¿Que son los componentes?*/

import './Equipo.css';
import Colaborador from '../Colaborador';

const Equipo = (props) => {
    const {titulo,colorPrimario,colorSecundario} = props.datos;
    //Video 03. Enviando prop
    //Destructuracion de la funcion para hacer uso de esta dentro del componente Equipo
    const {colaboradores,eliminarColaborador} = props;
    const obj = { backgroundColor: colorSecundario };
    const estiloTitulo = { borderColor: colorPrimario };
    console.log(colaboradores.length > 0);

    return <>
        {
            colaboradores.length > 0 &&
                <section className="equipo" style={obj}>
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className="colaboradores"> 
                        {
                            colaboradores.map((colaborador,index) => <Colaborador 
                                datos={colaborador}
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}//Envio de funcion eliminarColaborador dentro de prop al componente Colaborador
                            />
                            )
                        }
                    </div>
                </section>
        }
    </>
};

export default Equipo;
