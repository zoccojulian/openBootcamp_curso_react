import React from 'react';
import { useLocation } from 'react-router-dom';

export default function StatePage() {

    const location = useLocation();

    console.log(location.state); // State sent
    console.log(location.search); //Query Params Sent

    return (
        <div>
            <h1>State: { location.state.online ? 'The user is Online' : 'The user is OffLine'}</h1>
        </div>
    )
}
