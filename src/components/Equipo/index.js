/*Cruso: React: Como los componentes funcionan Aula 04. ¿Cómo React ve un componente?*/
//Video 02. Input Color

import './Equipo.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const {titulo,colorPrimario,colorSecundario} = props.datos;
    const {colaboradores,eliminarColaborador,actualizarColor} = props;//Destructuracion de la función actulizarColor
    const obj = { backgroundColor: hexToRgba(colorPrimario,0.6)};//Video 05. Actulizando color
    const estiloTitulo = { borderColor: colorPrimario };

    return <>
        {
            colaboradores.length > 0 &&
                <section className="equipo" style={obj}>
                    {/*Creamos un input de tipo color*/}
                    <input 
                        type='color'
                        className='input-color'//Agregamos el nombre de la clase para darle el estilo
                        value={colorPrimario}//Video 05. Actulizando color
                        onChange={(event) => {
                            /*console.log(event.target.value)*/
                            //Video 03. Actulizar equipos
                            actualizarColor(event.target.value,titulo)//uso de la funcion actualizarColor
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
                            />
                            )
                        }
                    </div>
                </section>
        }
    </>
};

export default Equipo;
