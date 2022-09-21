/**Ejemplko de uso de:
 * - useState()
 * -useRef()
 * -useEffect()
 * 
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    // Vamos a crear 2 contadores distintos

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //crear una referencia para asociar una variable con un elemto del DOM

    const miRef = useRef();

    const incrementar1 = () => {
        setContador1(contador1 + 1);
    }

    const incrementar2 = () => {
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect
     */

    /**
     * ? Caso 1 : Ejecutar siempre un snippet de código
     * Cada vez que haya un cambio en el estadpo del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */
    /*
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    });
    */

    /**
     * ? Caso 2 : Ejecutar solo cuando cambie contador 1
     */
    /*
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1]);
    */


    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 O CONTADOR2
     */

     useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/*elemento referenciado*/}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
            
        </div>
    );
}

export default Ejemplo2;
