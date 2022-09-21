import React from 'react';
import{ useNavigate } from 'react-router-dom';

export default function ProfilePage( { user }) {

    const history = useNavigate();

    const goBack = () => {
        history(-1);
    }

    const navigate = (path) => {
        history(path)
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ () => navigate('/tasks') } >Tasks</button>
            <button onClick={ goBack } >Go Back</button>
        </div>
    )
}
