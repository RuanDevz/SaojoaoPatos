// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import '../Questions/Estilos/Question4.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';

const Question4 = () => {
  const [nota, setNota] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleNotaClick = (notaSelecionada) => {
    setNota(notaSelecionada);
    setError(false); 
  };

  const handleNextQuestion = () => {
    if (nota === null) {
      setError(true); 
    } else {
      _feedbacks.push(nota)
      setFeedbacks(_feedbacks)
      navigate('/question5');
    }
  };

  return (
    <div className='container_geral_question4'>
      <h1 className='title'>Em uma escala de 1 a 5, quanto Você ficou satisfeito com a organização do evento?</h1>
      <div className='container-block'>
        <div className='Block'></div>
        <p id='mediravaliacao'>Pouco satisfeito</p>
        <div className={`block ${nota === 1 ? 'selected' : ''}`} id='red' onClick={() => handleNotaClick(1)}>
          <span id='cores1a5'>1</span>
        </div>
        <div className={`block ${nota === 2 ? 'selected' : ''}`} id='orange' onClick={() => handleNotaClick(2)}>
          <span id='cores1a5'>2</span>
        </div>
        <div className={`block ${nota === 3 ? 'selected' : ''}`} id='yellow' onClick={() => handleNotaClick(3)}>
          <span id='cores1a5'>3</span>
        </div>
        <div className={`block ${nota === 4 ? 'selected' : ''}`} id='green-light' onClick={() => handleNotaClick(4)}>
          <span id='cores1a5'>4</span>
        </div>
        <div className={`block ${nota === 5 ? 'selected' : ''}`} id='green' onClick={() => handleNotaClick(5)}>
          <span id='cores1a5'>5</span>
        </div>
        <p id='mediravaliacao'>Muito satisfeito</p>
      </div>
      {error && <p className="error_message">É necessário escolher uma nota.</p>}
      <div className='container_button'>
        <button id='question4_button' onClick={handleNextQuestion}>Próxima Pergunta</button>
      </div>
    </div>
  );
};

export default Question4;
