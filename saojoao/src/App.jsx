import React, { useState } from 'react';
import Start from './Questions/Start';
<<<<<<< HEAD
import { ReplyQuestions } from './Context/ReplyQuestions';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  return (
    <div>
      <ReplyQuestions.Provider value={{ selectedOption, setSelectedOption}}>
        <Start />
        </ReplyQuestions.Provider>
=======
import { feedbackContext } from './Context/FeedbackContext';
import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';
import Question4 from './Questions/Question4';
import Question5 from './Questions/Question5';
import Question6 from './Questions/Question6';
import Question7 from './Questions/Question7';
import Question8 from './Questions/Question8';
import Question9 from './Questions/Question9';
import Question10 from './Questions/Question10';
import Questionsoptional from './Questions/Questionsoptional';
import Finish from './Questions/Finish'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [feedbacks, setFeedbacks, question, setQuestion] = useState([]);

  return (
    <div>
      <Router>
      <feedbackContext.Provider value={{ feedbacks, setFeedbacks, question, setQuestion }}>
    
      <Routes>
        <Route path='/' element={<Start/>}></Route>
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
        <Route path='/Questionsoptional' element={<Questionsoptional />}></Route>
        <Route path='/Finish' element={<Finish />}></Route>
        
      </Routes>
      </feedbackContext.Provider>
    </Router>
>>>>>>> eefc31ad23ac35825c9d49a627419faaecfe71b7
    </div>
  );
};

export default App;