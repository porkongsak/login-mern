import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'

const App = ()  =>{
  return (
    <div>
        <BrowserRouter>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/dashboard" exact component={Dashboard} />
        </BrowserRouter>
    </div>
  );
  
}

export default App;
