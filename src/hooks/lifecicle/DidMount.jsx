/**
 * Ejemlo de uso del método
 * del ciclo de vida en componente clase y el hook del ciclo de vida 
 * en componetne funcional
 */

import React, { Component , useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamineto antes de que el componente sea añadido al DOM(renderize)')
    }


  render() {
    return (
      <div>
        <h1>didMount</h1>
      </div>
    )
  }
}

export const DidMountHook = () => {

    useEffect(() => {

        console.log('Comportamineto antes de que el componente sea añadido al DOM(renderize)');
        
    }, []);

    return (
        <div>
            <h1>didMount</h1>
        </div>
    );
}


