import React from 'react'

export default function AsyncExample() {

    async function generateNumber () {
        return 1;
    }

    async function generatePromiseNumber () {
        return Promise.resolve(2)
    }

    function obtainNumber () {
        generateNumber()
            .then( ( response ) => alert( `Response: ${response}`))
            .catch( ( error ) => alert ( ` Something went wrong: ${error}`));
    }

    function obtainPromiseNumber () {
        generatePromiseNumber()
            .then( ( response ) => alert( `Response: ${response}`))
            .catch( ( error ) => alert ( ` Something went wrong: ${error}`));
    }

    async function saveSessionStorage ( key , value ) {
        sessionStorage.setItem( key , value );
        return Promise.resolve(sessionStorage.getItem(key));
    }


    function showStorage(){
        saveSessionStorage('name', 'julian')
            .then( ( response ) => {
                let value = response;
                alert ( `Saved Name: ${value}` );
            }).catch( ( error) => {
                alert ( ` Something went wrong: ${error}`);
            }).finally( () => console.log('SUCCES: Name save and retrived'));
    }

    async function obtainMesssage () {

        let promise = new Promise( ( resolve , reject) => {
            setTimeout(() => resolve('Hello World'), 2000)
        });

        let message = await promise;

        await alert( `Message received: ${message}`)
    };

    const returnError = async () => {
        await Promise.reject( new Error('Oooops'));
    }

    const consumeError = () => {
        returnError()
            .then( ( response) => alert( `Every is OK: ${response}`))
            .catch( (error) => alert ( `Something wen wrong: ${error}`))
            .finally( () => alert ('Finally executed'))
    }

    const urlNotFound = async () => {

        try{

            let response = await fetch('https://invalidURL.com')
            alert(`Response: ${JSON.stringify(response)}`)


        }catch (error){
            alert ( `Something wen wrong with your URL: ${error} (check your console)`)
        }

    }


    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert ( `Something wen wrong with your URL: ${error} (check your console)`));
    };



    return (
        <div>
            <button onClick= { obtainNumber }>
                Obtain Number
            </button>
            <button onClick= { obtainPromiseNumber }>
                Obtain Promise Number
            </button>
            <button onClick= { showStorage }>
                Save Name and Show
            </button>
            <button onClick={ obtainMesssage }>
                Receive message in 2 seconds
            </button>
            <button onClick={ consumeError }>
                Obtain Error
            </button>
            <button onClick={ urlNotFound }>
                Request to Unknown URL
            </button>
            <button onClick={ multiplePromise }>
                Multipple Promises
            </button>

        </div>
    )
}
