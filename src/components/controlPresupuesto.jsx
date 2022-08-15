import style from '../styles/Gastos.module.css'
import {useState,useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Filtros from './Filtros'
import ListadoGastos  from './ListarGastos'

import {formatearCantidad} from '../helpers/index'

const controlPresupuesto = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
    setGastoEditar, 
    eliminarGasto,
    filtro, 
    setFiltro,
    gastosFiltrados,
    porcentaje,
    setPorcentaje,
    disponible,
    setDisponible,
    gastado,
    setGastado
    

}) => {

   

      const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');

        if(resultado) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        } 
    }
  return (
    <>
    <div className=''>
    <h2 className='heading'>Gatsos</h2>
    <div className={style.principal}>
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
                <button className={style.resectApp}
                    type='button'
                    onClick={handleResetApp}
                >Reiniciar</button>

                <p>Presupuesto: <span>{formatearCantidad(presupuesto)}</span></p>
                <p>Disponible: <span>{formatearCantidad(disponible)}</span></p>
                <p>Gastado: <span>{formatearCantidad(gastado)}</span></p>
            
            </div>
        </div>
        

    </div>
    {isValidPresupuesto && (
          
          <main className={style.main}>
            <Filtros 
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos 
                gastos={gastos}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
                filtro={filtro}
                gastosFiltrados={gastosFiltrados}
            />
          </main>)}
   
</div>

 </>
  )
}

export default controlPresupuesto