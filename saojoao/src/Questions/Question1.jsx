import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Question.css';
import { ReplyQuestions } from '../Context/ReplyQuestions';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png'

const Question1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setError(false);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      setError(true); 
    } else {
      _feedbacks.push(selectedOption)
      setFeedbacks(_feedbacks)
      console.log(feedbacks)
      navigate('/question9');
    }
  };

  return (
    <div>
      <main className='container_main_geral'>
        <section className='first-section-question1'>
          <h1 className='title-white'><span id='pink'>SOBRE SUA </span> EXPECTATIVA <span id='orange'>EM RELAÇÃO AO </span>SÃO JOÃO 2023:</h1>
        </section>
        <section className='container_button'>
          <button id='green'>SUPEROU</button>
          <button id='darkgreen'>ATENDEU PLENAMENTE</button>
          <button id='yellow'>ATENDEU EM PARTES</button>
          <button id='darkred'>INDIFERENTE</button>
          <button id='red'>NÃO SATISFEITO</button>
        </section>
      </main>
    </div>
  );
};

export default Question1;