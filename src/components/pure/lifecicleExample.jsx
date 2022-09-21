/**
 * Ejemplo de componente de tipo clase que sipones de los métodos 
 * del ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifecicleExample extends Component {

    constructor (props){
        super(props)
        console.log('CONSTRUCTOR: cuando se instacia el componente');
    };

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente')
    };

    componentDidMount(){
        console.log('WILLMOUNT: Justo al termina el montaje del montaje del componente, antes de renderilarlo')
    };

    conponentWillReceiveProps(nextProps){
        console.log('WILLRECEIVEPROPS: Si va a recivir props')
    };

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Controlar si el componente debe o no actualizarse
         * return true / false
         */
    };

    conponentWillUpdate(nextProps, nextState){
        console.log('WILLUPDATE: Justo antes de actualizarse')
    };

    conponentDidUpdate(nextProps, nextState){
        console.log('DIDUPDATE: Justo DESPUÉS de actualizarse')
    };

    componentWillUnmount(){
        console.log('WILLUNMOUNT: Justo antes de desaparecer')
    };
    render() {
        return (
            <div>
                

            </div>
        );
    }
}


LifecicleExample.propTypes = {

};


export default LifecicleExample;
