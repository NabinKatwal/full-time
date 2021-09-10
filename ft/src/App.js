import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className='header'>
            <Link to = '/'>Home</Link>
            <Link to='/login'>Login</Link><small>(Access without token only)</small>
            <Link to='/dashboard'>Dashboard</Link><small>(Acess with token only)</small>
          </div>
          <div className='content'>
            <Switch>
              <Route path = '/'>
                <Home />
              </Route>
              <Route path = '/login'>
                <Login />
              </Route>
              {/* <Route path="/login" component={Login} /> */}
              <Route path = '/dashboard' component = {Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
