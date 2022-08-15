
import NuevoPresupuesto from '../components/NuevoPresupuesto'
import ControlPresupuesto from '../components/ControlPresupuesto'

const Gastos = ({ 
    gastos,
    setGastos,
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto,
    filtro,
    gastosFiltrados,
    setFiltro

}) => {
  return (

        <>
            {isValidPresupuesto ? (
                <ControlPresupuesto 
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    isValidPresupuesto={isValidPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                    filtro={filtro}
                    setFiltro={setFiltro}
                    gastosFiltrados={gastosFiltrados}
                />
            ) : (
                <NuevoPresupuesto 
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto }
                />
            )}
        
        
        </>

  )
}

export default Gastos