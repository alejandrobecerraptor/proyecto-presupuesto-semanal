import {useState,useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  //para el presupuesto.
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  //carga condicional de componentes
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  //state para agregar el listado de gastos.
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);


  //useEffect que actualiza el restante
  useEffect(() => {
    if(crearGasto){
      //agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          { mostrarpregunta ? 
            (
              <Pregunta
                  guardarPresupuesto = {guardarPresupuesto}
                  guardarRestante = {guardarRestante}
                  actualizarPregunta = {actualizarPregunta}
              />
            ) 
            : 
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto = {guardarGasto}
                    guardarCrearGasto = {guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                  gastos = {gastos} 
                  />
                  <ControlPresupuesto
                    presupuesto = {presupuesto}
                    restante = {restante}
                  />
                </div>
            </div>
            )
          }  
        </div>
      </header>
    </div>
  );
}

export default App;
