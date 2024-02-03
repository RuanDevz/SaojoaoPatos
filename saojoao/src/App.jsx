// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Start from './Questions/Start';
import { ReplyQuestions } from './Context/ReplyQuestions';
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
import Finish from './Questions/Finish';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [question, setQuestion] = useState(null);

  return (
    <div>
      <Router>
        <ReplyQuestions.Provider value={{ selectedOption, setSelectedOption }}>
          <feedbackContext.Provider value={{ feedbacks, setFeedbacks, question, setQuestion }}>
            <Routes>
              <Route path='/' element={<Start />} />
              <Route path='/question1' element={<Question1 />} />
              <Route path='/question2' element={<Question2 />} />
              <Route path='/question3' element={<Question3 />} />
              <Route path='/question4' element={<Question4 />} />
              <Route path='/question5' element={<Question5 />} />
              <Route path='/question6' element={<Question6 />} />
              <Route path='/question7' element={<Question7 />} />
              <Route path='/question8' element={<Question8 />} />
              <Route path='/question9' element={<Question9 />} />
              <Route path='/question10' element={<Question10 />} />
              <Route path='/Questionsoptional' element={<Questionsoptional />} />
              <Route path='/Finish' element={<Finish />} />
            </Routes>
          </feedbackContext.Provider>
        </ReplyQuestions.Provider>
      </Router>
    </div>
  );
};

export default App;
