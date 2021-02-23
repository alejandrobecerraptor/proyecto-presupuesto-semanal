import {useState} from 'react';
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

  //funcion que se ejecuta cuando agregamos nuevo gasto

  const agregarNuevoGasto = gasto =>{
    guardarGastos([
      ...gastos,
      gasto
    ]);
  }

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
                    agregarNuevoGasto = {agregarNuevoGasto}
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
