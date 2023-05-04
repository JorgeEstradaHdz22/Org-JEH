/*Cruso: React: Como los componentes funcionan Aula 01. Creando los equipo*/
/*Video 06. Colaborador*/

import './Colaborador.css'

const Colaborador = (props) => {
    return <div className='colaborador'>
        <div className='encabezado'>
            <img src='https://github.com/JorgeEstradaHdz22.png' alt='Jorge'/>
        </div>
        <div className='info'>
            <h4>Jorge Estrada</h4>
            <h5>Estudiante</h5>
        </div>
    </div>
};

export default Colaborador;