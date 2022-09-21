/**
 * ejemplo Hooks:
 * 
 * - usestate()
 * - useContext()
 * 
 * 
 */

import React, {useState, useContext} from 'react';


/**
 * 
 * @returns componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 * 
 */

 const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            {/*Pintamos el componente 2*/}
            <Componente2></Componente2>
            
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);


    return (
        <div>
            <h2>La sesión es: {state.sesion}</h2>
            
        </div>
    );
}



export default function MiComponenteconContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //Creamos el estado de este componente

    const [sesionData, setSesionData] = useState(estadoInicial);

    const actualizarSesion = () => {
        setSesionData(
            {
                token: 'JWT1234567989',
                sesion: sesionData.sesion + 1
            }
        )
    }

  return (
    <miContexto.Provider value={sesionData}>
        {/*Todo lo que esté aqí adentro puede leer los datos de sesionData*/}
        {/*Si se actualiza, los componente de aquí tambien se actualizan*/}
        <h1>**** Ejemplo de useState() y useContext() ****</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar sesion</button>
    </miContexto.Provider>
  )
}
