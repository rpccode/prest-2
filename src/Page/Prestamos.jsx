import style from '../styles/Prestamo.module.css'
import Prestamo from '../components/Prestamo'
import Filtros from '../components/FiltroPrestamo'
import { useState } from 'react'
import PerfilPrestamos from '../components/PerfilPrestamos'


const Prestamos = () => {
    const [Perfil, setPerfil] = useState({});
    return (
        <>
            <div className='contenedor'>
                <h2 className='heading'>Prestamos</h2>    

                {!Perfil.nombre ? (
                    <>
                        <Filtros />
                        <div className={`${style.principal} ${style.listadoPrestamos}`}>

                            <Prestamo
                                setPerfil={setPerfil}
                            />
                             <Prestamo
                                setPerfil={setPerfil}
                            />
                             <Prestamo
                                setPerfil={setPerfil}
                            />
                             <Prestamo
                                setPerfil={setPerfil}
                            />
                             <Prestamo
                                setPerfil={setPerfil}
                            />

                        </div>

                    </>

                ) : (
                    <PerfilPrestamos />



                )}



            </div>

        </>
    )
}

export default Prestamos