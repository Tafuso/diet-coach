import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContext from '../context/UserContext'
import Dashboard from '../pages/dashboard'
import Index from '../pages/index'


const Router: React.FC = () => {
  const { state: globalState } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/dashboard"  element={globalState.isLogged ?  <Dashboard /> :  <Index />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
