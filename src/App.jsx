import './styles/normalize.css'
import './styles/globals.css'
import {useState , useEffect} from 'react'

import Layout from './components/Layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Inicio from './Page/Inicio'
import Gastos from './Page/Gastos'
import Prestamos from './Page/Prestamos'


function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])
  const [porcentaje, setPorcentaje] = useState(10)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  useEffect(() => {
      const totalGastado = gastos.reduce( (total, gasto ) => gasto.cantidad + total, 0);
      const totalDisponible = presupuesto - totalGastado;

      // Calcular el porcentaje gastado
      const nuevoPorcentaje = (( ( presupuesto - totalDisponible ) / presupuesto  ) * 100).toFixed(2);

      
      setDisponible(totalDisponible)
      setGastado(totalGastado)
      setTimeout(() => {
        setPorcentaje(nuevoPorcentaje)
      }, 1500);
    }, [gastos])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presupuestoLS > 0 ) {
      setIsValidPresupuesto(true)
    }
  }, []);

  const handleResetApp = () => { }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout
          modal={modal}
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          // guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />}>
            <Route index element={<Inicio
            presupuesto={presupuesto}
              porcentaje={porcentaje}
              disponible={disponible}
              gastado={gastado}
            
            />} />
            <Route path='/gastos' element={<Gastos
              gastos={gastos}
              setGastos={setGastos}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
              setFiltro={setFiltro}
            
            />} />
            <Route path='/prestamos' element={<Prestamos/>} />


        </Route>
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
