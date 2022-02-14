import React from 'react'
import ReactDOM from 'react-dom'
import Router from './routes/routes'
import './global.scss'
import { UserProvider } from './context/UserContext'

ReactDOM.render(
  <UserProvider>
    <Router />
  </UserProvider>,
  document.getElementById('root')
)