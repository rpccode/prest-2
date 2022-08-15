
import { formatearCantidad, formatearFecha } from '../helpers'
import style from '../styles/Prestamo.module.css'

const PerfilPrestamos = () => {
  return (
    <div className={style.perfil}>
      
       <div className={`${style.prestamo} ${style.sombra}`}>
                    <div className={`${style.contenidoPrestamo}`}>
                       
                        <div className={style.descripcionPrestamo}>
                            <p className={style.nombrePrestamo}>Rudy Perez</p>
                            <div>
                            <p className={`${style.categoria} ${style.fechaPrestamo}`}>Fecha de Pago <br/> <span>{formatearFecha(Date.now())}</span> </p>
                            <p className={style.fechaPrestamo}>
                                Direccion: {''} <br/>
                                <span>Av Estrella Shadala Urb Miraflores c/1 #5</span>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
      
      
      
    </div>
  )
}

export default PerfilPrestamos