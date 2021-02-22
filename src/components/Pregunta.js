import React,{Fragment} from 'react';

const Pregunta = () => {
    return ( 
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto"
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;