/**
 * Ejemplo de uso del método componentWillUnmount para el componente clase
 * y uso de hook para el componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component , useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }
  render() {
    return (
      <div>
        <h1>WillUnMount</h1>
      </div>
    )
  }
}


export const WillUnMountHook = () => {

    useEffect(() => {
        //aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);


    return (
        <div>
            
        </div>
    );
}


