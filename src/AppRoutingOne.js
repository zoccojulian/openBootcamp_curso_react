
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useMatch } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/aboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My firts Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged);
  }, []);

  return (
    <Router>

      <div>
        <aside>
          <Link to='/' >| HOME |</Link>
          <Link to='/about' >| ABOUT |</Link>
          <Link to='/faqs' >| FAQs |</Link>
          <Link to='/task/1' >| TASK 1 |</Link>
          <Link to='/task/2' >| TASK 2 |</Link>
          <Link to='/una404' >| ruta inexistente |</Link>
          <Link to='/login' >| Login |</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage/> }/>
            <Route exact path='/online-state' element={ <StatePage/> }/>
            <Route path='/login' element={ logged ? <Navigate replace to='/'/> : <LoginPage/>} />
            <Route path='/about' element= { <AboutPage/> } />
            <Route path='/faqs' element= { <AboutPage/> } />
            <Route path='/profile' element={ logged ? <ProfilePage/> : <Navigate replace to='/login'/>}/>
            <Route path='/tasks' element={ <TasksPage/> } />
            <Route exact path='/task/:id' element ={ <TaskDetailPage tasks={ taskList } /> } />
            {/** 404 - Page Not Found*/}
            <Route path="*"element = { <NotFoundPage/> }/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
