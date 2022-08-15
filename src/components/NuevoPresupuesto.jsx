import { useState } from 'react'
// import Mensaje from './Mensaje'
import style from '../styles/NuevoPresupuesto.module.css'

const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto, 
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0) {
            setMensaje('No es un presupuesto válido')
            return
        } 
        setMensaje('')
        setIsValidPresupuesto(true)
        
    }

    return (
        <div className={`${style.contenedorpresupuesto} ${style.contenedor} ${style.sombra}`}>
            
            <form onSubmit={handlePresupuesto} className={style.formulario}>
                <div className={style.campo}>
                    <label>Definir Presupuesto</label>

                    <input 
                        className={style.nuevopresupuesto}
                        type="number"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto
