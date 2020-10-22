import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { UserList, UserForm, Sidebar, AdmHeader } from './'
import './AdminPage.css'

export const AdminPage = () => {
    return (
        <>
        <div id='AdmContainer'>
          <div id='sidebarContainer'>
            <Sidebar />
          </div>
          <div id='dashboardContainer'>
            <AdmHeader />
            <Switch>
              <Route path='/admin/user-form'>
                <UserForm />
              </Route>
              <Route path='/admin/user-list'>
                <UserList />
              </Route>
            </Switch>
          </div>
        </div>
        </>
    )
}