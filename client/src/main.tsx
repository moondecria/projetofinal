import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './templates/Login'
import Signup from './templates/Signup'
import Home from './templates/Home'

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/home' Component={Home} />
        <Route path='/singup' Component={Signup} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
