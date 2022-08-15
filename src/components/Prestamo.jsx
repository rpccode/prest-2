
import style from '../styles/Prestamo.module.css'

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import { formatearFecha , formatearCantidad} from '../helpers'

import cobros from '../img/COBROSSSS.png'




const Prestamo = ({prestamo, setPrestamoEditar, eliminarPrestamo,setPerfil}) => {
    const { categoria, nombre, cantidad, id, fecha } = prestamo || {};

    const prestamosPersona ={
        nombre:'rudy'
    }
    const handlePerfil =(e)=>{
        
        setPerfil(prestamosPersona)

    }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setPrestamoEditar(Prestamo)
            
            }
            
               >
                Pago
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => eliminarPrestamo(id)}
                destructive={true}

            >
                No Pago
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
                
            >
                <div className={` ${style.sombra}`}>
                    <div className={`${style.contenidoPrestamo}`}>
                        <img 
                            src={cobros}
                            alt="Icono Prestamos"
                        />
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
                    <div className={style.info}>
           
                    <p className={style.cantidadPrestamo}>Cuota: <span className={style.cantidadPrestamo}>{formatearCantidad(900)}</span></p>
                    <button className={style.boton}
                        onClick={handlePerfil}
                    >info</button>
                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Prestamo
