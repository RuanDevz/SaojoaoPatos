// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import Question1 from './Questions/Question1.jsx'
import Question2 from './Questions/Question2.jsx'
import Question3 from './Questions/Question3.jsx'
import Question4 from './Questions/Question4.jsx'
import Question5 from './Questions/Question5.jsx'
import Question6 from './Questions/Question6.jsx'
import Question7 from './Questions/Question7.jsx'
import Question8 from './Questions/Question8.jsx'
import Question9 from './Questions/Question9.jsx'
import Question10 from './Questions/Question10.jsx'
import Questionsoptional from './Questions/Questionsoptional.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/Questionsoptional' element={<Questionsoptional/>}></Route>
      <Route path='/question1' element={<Question1/>}></Route>
      <Route path='/question2' element={<Question2/>}></Route>
      <Route path='/question3' element={<Question3/>}></Route>
      <Route path='/question4' element={<Question4/>}></Route>
      <Route path='/question5' element={<Question5/>}></Route>
      <Route path='/question6' element={<Question6/>}></Route>
      <Route path='/question7' element={<Question7/>}></Route>
      <Route path='/question8' element={<Question8/>}></Route>
      <Route path='/question9' element={<Question9/>}></Route>
      <Route path='/question10' element={<Question10 />}></Route>
      
    </Routes>
  </Router>
)
