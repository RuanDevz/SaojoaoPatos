import React, { useState, useContext } from 'react';
import './Estilos/Question8.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png';

const FaixaEtariaQuestion = () => {
  const navigate = useNavigate(); 

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleRatingChange = (rating) => {
    _feedbacks.push(rating);
    setFeedbacks(_feedbacks);
    console.log(_feedbacks);
    navigate('/question9'); 
  };

  return (
    <div className='envolvente'>
      <header className='container_logo_question6'>
        <img src={logo} alt="logo" />
      </header>
      <main className='container_geral_question8'>
        <section className='container_section_question8'>
          <p>EM UMA ESCALA DE <span id='orange'>1 A 5</span> QUANTO VOCÊ FICOU <span id='pink'>SATISFEITO </span>COM A ORGANIZAÇÃO DO <span id='ocean'> EVENTO ?</span></p>
        </section>
        <section className='container_button_question3'>
          <button onClick={() => handleRatingChange(1)} id='red'>1</button>
          <button onClick={() => handleRatingChange(2)} id='darkred'>2</button>
          <button onClick={() => handleRatingChange(3)} id='yellow'>3</button>
          <button onClick={() => handleRatingChange(4)} id='darkgreen'>4</button>
          <button onClick={() => handleRatingChange(5)} id='green'>5</button>
        </section>
      </main>
    </div>
  );
};

export default FaixaEtariaQuestion;
