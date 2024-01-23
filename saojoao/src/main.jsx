// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Saojoao from './Components/Home/Saojoao.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/saojoao' element={<Saojoao/>}></Route>
    </Routes>
  </Router>
)
