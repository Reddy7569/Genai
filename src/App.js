import React from 'react'
import Genai from './Components/Genai/Genai'
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route exact path='/' Component={Genai}/>
         <Route exact path='/login' Component={Login}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App