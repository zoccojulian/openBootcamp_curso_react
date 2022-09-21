/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre : 'Martín',
        email : 'martin@imaginagroup.com'
    }

    /**
     * Queremos que el valorInicial y personaInicial sean
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    const incrementarContador = () => {
        setContador(contador + 1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */

    const actualizarPersona = () => {
        setPersona(
            {
                nombre : 'Pepe',
                email : 'pepe@imaginagroup.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la Persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/*Bloque de botones apra actualizar el estado*/}
            <button onClick={incrementarContador} >Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
