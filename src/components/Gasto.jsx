
import style from '../styles/Gastos.module.css'

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import { formatearFecha } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'


const diccionarioIconos = {
    ahorro : IconoAhorro,
    comida : IconoComida,
    casa : IconoCasa,
    gastos : IconoGastos,
    ocio : IconoOcio,
    salud : IconoSalud,
    suscripciones : IconoSuscripciones
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
    const { categoria, nombre, cantidad, id, fecha } = gasto || {};

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => eliminarGasto(id)}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className={`${style.gasto} ${style.sombra}`}>
                    <div className={`${style.contenidoGasto}`}>
                        <img 
                            src={IconoAhorro}
                            alt="Icono Gasto"
                        />
                        <div className={style.descripcionGasto}>
                            <p className={style.categoria}>Ahorro</p>
                            <p className={style.nombreGasto}>Vacaciones</p>
                            <p className={style.fechaGasto}>
                                Agregado el: {''} <br/>
                                <span>{formatearFecha(Date.now())}</span>
                            </p>
                        </div>
                    </div>
                    <p className={style.cantidadGasto}>$ 3000</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto
