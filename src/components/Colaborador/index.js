/*Cruso: React: Como los componentes funcionan Aula 02. Version Uno Proyecto*/
/*Video 03. Mostrando Colaboradores*/

import './Colaborador.css'

const Colaborador = (props) => {
    
    const {nombre,puesto,foto,equipo} = props.datos
    /*Video 05. Color de fondo equipo*/
    const {colorPrimario} = props

    return <div className='colaborador'>
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