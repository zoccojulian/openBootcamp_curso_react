import React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';

export default function HomePage() {

  const location = useLocation();
  const history = useNavigate();

  console.log('We are in Route:', location.pathname);


  const navigate = (path) => {
    history(path);
  }


  const navigateProps = (path) => {
    const newPath = path + '?online=true';
      history(newPath, {state: {online: true}})
  }



  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={ () => navigate('/profile')} >
        Go To Profile
      </button>
      <button onClick={ () => navigateProps('/online-state')} >
        Go To Page with State / Query Params
      </button>
    </div>
  )
}
