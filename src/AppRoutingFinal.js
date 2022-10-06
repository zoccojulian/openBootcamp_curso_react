
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useMatch } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardpage from './pages/dashboard/DashBoard';

function AppRoutingFinal() {

  let loggedIn = true;

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={ loggedIn ? 
            <Navigate from='/' to='/dashboard'/>
            : 
            <Navigate from='/' to= '/login'/>}/>
          <Route exact path='/login' element= { <LoginPage/> }/>
          <Route exact path='/dashboard' element={ loggedIn ? 
            <DashBoardpage/>
            : 
            <Navigate from='/dashboard' to= '/login'/>} />


          <Route element={ <NotFoundPage/> } />
        </Routes>

      </Router>
    </div>
  );
}

export default AppRoutingFinal;
