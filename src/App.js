import React from 'react';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { PortalPage } from './components/portal/PortalPage'
import { AdminPage } from './components/admin/AdminPage'

function App() {
  return (
    <>
    <Router>
      <Route path='/' exact>
        <PortalPage />
      </Route>
      <Route path='/admin'>
        <AdminPage />
      </Route>
    </Router>
    </>
  );
}

export default App;
