import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

// ? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor:  `rgb(${red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

//?Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
};

//Login / Logout buttons

const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ( { logoutAction , propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? Expreción True && expresion => se renderiza la expresion
// ? Expreción false && expresion => no se renderiza la expresion




export default function OptionalRender() {

    const [acces, setAcces] = useState(false);
    const [nMessage, setNMessage] = useState(0);
    
    // const updateAcces = () => {
    //     setAcces(!acces);
    // }

    const loginAction = () => {
        setAcces(true)
    }

    const logoutAction = () => {
        setAcces(false)
    }

    

    let optionalButton;

    // if (acces){
    //     optionalButton = <button onClick={updateAcces}>Logout</button>
    // }else{
    //     optionalButton = <button onClick={updateAcces}>Login</button>
    // }

    if (acces){
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    //unread messages

    let addMessages = () => {
        setNMessage(nMessage + 1)
    }

    return (
        <div>
            { optionalButton }
            {/* { nMessage>0 && nMessage===1 && <p>You have {nMessage} new messages</p> }
            { nMessage>1 && <p>You have {nMessage} new messages</p> }
            { nMessage === 0 && <p>There are no new messages</p>} */}
            {acces ? (
                <div>
                {nMessage > 0 ? 
                <p>You have {nMessage} new message{nMessage>1 ? 's': null}</p> 
                : <p>There are no new messages</p>
            } 

                <button onClick={addMessages}>{nMessage === 0 ? 'Add yput first message' : 'Add new message'}</button>
                </div>
            ): null}
            
        </div>
    )
}
