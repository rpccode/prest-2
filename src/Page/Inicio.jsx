import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import {formatearCantidad} from '../helpers/index'
import style from '../styles/Inicio.module.css'
import 'react-circular-progressbar/dist/styles.css'
const Inicio = ({porcentaje,disponible,gastado,presupuesto}) => {

  return (
    
        <div className='contenedor'>
            <h2 className='heading'>inicio</h2>
            <div className={style.contenido}>
            <div className={`${style.sombra} ${style.dosColumnas} ${style.dividido}`}>
            <div className={style.principal}>
            <CircularProgressbar
                    styles={buildStyles({
                        pathColor:porcentaje > 100 ? '#DC2626' : '#e99401',
                        trailColor:'#f5f5f5',
                        textColor:porcentaje > 100 ? '#DC2626' : '#e99401',
                        textSize:'12px'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className={style.contenidopresupuesto}>
                    <h2 className='heading'>Presupuesto del Dia</h2>

                <p>Presupuesto: <span>{formatearCantidad(presupuesto)}</span></p>
                <p>Disponible: <span>{formatearCantidad(disponible)}</span></p>
                <p>Gastado: <span>{formatearCantidad(gastado)}</span></p>
                <button className={style.informacion}>Mas Informacion</button>
            
            </div>
        </div>
                <div className={`${style.sombra} ${style.dosColumnas} ${style.dividido}`}>
                    <div className=''>
                    <CircularProgressbar
                            styles={buildStyles({
                                pathColor:'#e99401',
                                trailColor:'#f5f5f5',
                                textColor:'#e99401',
                                textSize:'12px'
                            })}
                            value={50}
                            text='50% Cobrado'                   
                                    />
                    </div>
                    <div className={style.contenidopresupuesto}>
                        <h2 className='heading'>Total a Cobrar del Dia</h2>
                        <p>Total a Cobrar: <span>3000</span></p>
                        <p>Cobrado: <span>3000</span></p>
                        <p>Faltante: <span>3000</span></p>
                        <button className={style.informacion}>Mas Informacion</button>
                    </div>
                </div>


            </div>
        </div>
    
  )
}

export default Inicio