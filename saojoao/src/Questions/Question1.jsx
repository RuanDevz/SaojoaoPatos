// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Question.css';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png';

const Question1 = () => {
  const navigate = useNavigate();
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  const handleNextQuestion = (event) => {
    const option = event.target.textContent;
    _feedbacks.push(option);
    setFeedbacks(_feedbacks);
    console.log(_feedbacks);
    navigate('/question3');
  };

  return (
    <div>
      <main className='container_main_geral'>
        <section className='first-section-question1'>
          <img src={logo} alt="logo" />
          <h1 className='title-white'><span id='pink'>SOBRE SUA <br /> </span> EXPECTATIVA <span id='orange'>EM <br /> RELAÇÃO AO </span>SÃO <br /> JOÃO 2023:</h1>
        </section>
        <section className='container_button'>
          <button onClick={handleNextQuestion} id='green'>SUPEROU</button>
          <button onClick={handleNextQuestion} id='darkgreen'>ATENDEU PLENAMENTE</button>
          <button onClick={handleNextQuestion} id='yellow'>ATENDEU EM PARTES</button>
          <button onClick={handleNextQuestion} id='darkred'>INDIFERENTE</button>
          <button onClick={handleNextQuestion} id='red'>NÃO SATISFEZ</button>
        </section>
      </main>
    </div>
  );
};

export default Question1;
