/*Cruso: React: Como los componentes funcionan Aula 06. Finalizando el proyecto*/

import './Equipo.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const {titulo,colorPrimario,colorSecundario,id} = props.datos;
    //Video 02. Creando Favorito
    const {colaboradores,eliminarColaborador,actualizarColor,like} = props;//Destructuracion de la funcion like
    const obj = { backgroundColor: hexToRgba(colorPrimario,0.6)};
    const estiloTitulo = { borderColor: colorPrimario };

    return <>
        {
            colaboradores.length > 0 &&
                <section className="equipo" style={obj}>
                    <input 
                        type='color'
                        className='input-color'
                        value={colorPrimario}
                        onChange={(event) => {
                            actualizarColor(event.target.value,id)
                        }}
                    
                    />
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className="colaboradores"> 
                        {
                            colaboradores.map((colaborador,index) => <Colaborador 
                                datos={colaborador}
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                                like={like}//Envio de la función like al componente Colaborador
                            />
                            )
                        }
                    </div>
                </section>
        }
    </>
};

export default Equipo;
