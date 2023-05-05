/*Curso: React: Como los componentes funcionan Aula 03. ¿Que son los componentes?*/

import './Colaborador.css';
//Video 04. Instalando iconos
import {AiFillCloseCircle} from 'react-icons/ai'

const Colaborador = (props) => {
    
    const {nombre,puesto,foto,equipo} = props.datos
    //Video 03. Enviando prop
    //Destructuracion de la funcion para hacer uso de esta dentro del componente Equipo
    const {colorPrimario,eliminarColaborador} = props

    return <div className='colaborador'>
        <AiFillCloseCircle className='eliminar' onClick={eliminarColaborador} />
        {/*<span onClick={eliminarColaborador}>D</span>*/}{/*Agregamos un span y la letra D, dentro de dicho span hay un evento onClick el cual dispra la funcion Eliminar colaborador el cual se encuentra en app y por el momento solo pasa un console.log('Eliminar equipo')*/}
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
};

export default Colaborador;