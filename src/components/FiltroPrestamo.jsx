import React from 'react'
import style from '../styles/Filtro.module.css'

const FiltroPrestamo = ({filtro, setFiltro}) => {
  return (
    <div className={`${style.filtros} ${style.sombra} ${style.contenedor}`}>
            <form>
                <div className={`${style.campo}`}>
                    <label>Mostrar</label>
                    <select
                        value={filtro}
                        onChange={e => setFiltro(e.target.value) }
                    >
                        <option value="">-- Todas los Prestamos --</option>
                        <option value="dia">Dia</option>
                        <option value="semana">Semana</option>
                        <option value="mes">Mes</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="noPago">No Pago</option>
                        <option value="otros">Otros</option>

                       
                    </select>
                </div>
            </form>
        </div>
  )
}

export default FiltroPrestamo