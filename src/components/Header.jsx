
import {Link} from 'react-router-dom'
import style from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
        <div className='contenedor'>
            <div className={style.barra}>
                <Link to='/' >
                  
                        <img src="/vite.svg" alt="imagen logo" />
                    
                </Link>
                <nav className={style.navegacion}>
                    <Link to='/'>Inicio</Link>
                    <Link to='/prestamos'>Prestamos</Link>
                    <Link to='/gastos'>Gastos</Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header