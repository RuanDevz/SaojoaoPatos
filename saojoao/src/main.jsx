// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import Question2 from './Questions/Question2.jsx'
import Question3 from './Questions/Question3.jsx'
import Question4 from './Questions/Question4.jsx'
import Question5 from './Questions/Question5.jsx'
import Question6 from './Questions/Question6.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='question2' element={<Question2/>}></Route>
      <Route path='question3' element={<Question3/>}></Route>
      <Route path='question4' element={<Question4/>}></Route>
      <Route path='question5' element={<Question5/>}></Route>
      <Route path='question6' element={<Question6/>}></Route>
    </Routes>
  </Router>
)
