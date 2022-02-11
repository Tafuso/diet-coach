import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '../pages/index'


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
