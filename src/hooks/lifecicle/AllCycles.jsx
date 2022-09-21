import React, { useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componentecreado');

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('actualizacion del componente')
        }, 1000);

        return () => {
            console.log('componente va a desaparecer');
            document.title = 'Tiempo detenido';
            clearInterval(intervalID);
        };
    }, []);


    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
