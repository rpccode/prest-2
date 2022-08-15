import * as React from 'react'
import {useState} from 'react'
import Header from './Header'
import style from '../styles/Layout.module.css'
import { Outlet } from 'react-router-dom'
import IconoNuevoGasto from '../img/nuevo-gasto.svg'
import Modal from './Modal'
const Layout = ({
  modal,
  setModal, 
  animarModal, 
  setAnimarModal, 
  guardarGasto, 
  gastoEditar,
  setGastoEditar
}) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const open =Boolean(anchorEl);
  const handleClick = e =>{
    if(!openMenu){
        setOpenMenu(true)
    }else{
      setOpenMenu(false)
    }
  }
 
  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
   setOpenMenu(false)
    setTimeout(() => {
        setAnimarModal(true)
    }, 500);
  }
  return (
    <div className={modal ? style.fijar : ''} >
        <Header/>
        <Outlet/>
        
        
        <div className={`${style.nuevoGasto} `}>
                <img 
                    src={IconoNuevoGasto}
                    alt="icono nuevo gasto"
                    onClick={handleClick}
                />
                <ul className={`${style.menu} ${openMenu ? style.menuOpen : ''}`}>
                    <li
                    >Prestamo</li>
                    <li className={style.active}
                      onClick={handleNuevoGasto}
                    >Gasto</li>

                </ul>
            </div>
            
              {modal && <Modal 
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGasto={guardarGasto}
                    gastoEditar={gastoEditar}
                    setGastoEditar={setGastoEditar}
                  />}
    </div>
  )
}

export default Layout