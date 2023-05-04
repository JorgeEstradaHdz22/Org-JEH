/*Cruso: React: Como los componentes funcionan Aula 02. Version Uno Proyecto*/
/*Video 02. Registrando Colaborador*/

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