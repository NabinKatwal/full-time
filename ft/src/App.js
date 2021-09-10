import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import axios from 'axios';

import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './components/Dashboard';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import {getToken, removeUserSession, setUserSession} from './Utils/Common'
import { useEffect, useState } from 'react';

function App() {
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(()=>{
    const token = getToken()
    if (!token){
      return
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response=>{
      setUserSession(response.data.token, response.data.user)
      setAuthLoading(false)
    }).catch(error=>{
      removeUserSession()
      setAuthLoading(false)
    })
  }, [])

  if (authLoading && getToken()){
    return <div className='content'>Checking Auth....</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className='header'>
            <NavLink exact activeClassName='active' to = '/'>Home</NavLink>
            <NavLink activeClassName='active' to='/login'>Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName='active' to='/dashboard'>Dashboard</NavLink><small>(Acess with token only)</small>
          </div>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <PublicRoute path='/login' component={Login} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
