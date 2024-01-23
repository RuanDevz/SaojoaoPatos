// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Saojoao from './Components/Home/Saojoao.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}></Route>
    </Routes>
  </Router>
)
