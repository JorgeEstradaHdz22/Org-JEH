//Video 02. Creando Favorito

import './Colaborador.css';
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart} from 'react-icons/ai'

const Colaborador = (props) => {
    
    const {nombre,puesto,foto,equipo,id,fav} = props.datos //destructuramos y agregamos la prop fav
    const {colorPrimario,eliminarColaborador,like} = props //destructuramos y agregamos la funcion like
    
    //operador ternario
    //condicion ? verdadera : falsa

    return <div className='colaborador'>
        <AiFillCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)} />
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color='red' onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}{/*uso de la función Like*/}
        </div>
    </div>
};

export default Colaborador;