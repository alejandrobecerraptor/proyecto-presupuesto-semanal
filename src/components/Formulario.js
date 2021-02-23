import React, {useState} from 'react';

const Formulario = () => {
    // state para el nombre del gasto
    const [nombre, guardarNombre] = useState('');
    //state para la cantidad disponible
    const [cantidad, guardarCantidad] = useState(0);
    //cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar

        //construir el gasto

        //pasar el gasto al componente principal

        //reset el form
    }
     
    return ( 
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos Aqui</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value,10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;