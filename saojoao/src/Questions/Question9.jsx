// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Question9.css'
import { feedbackContext } from '../Context/FeedbackContext';

const Question9 = () => {
  const [nota, setNota] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleNotaClick = (notaSelecionada) => {
    setNota(notaSelecionada);
  };

  const handleNextQuestion = () => {
    if (nota === null) {
      setError(true);
    } else {
      _feedbacks.push(nota)
      setFeedbacks(_feedbacks)
      setError(false);
      navigate('/question10');
    }
  };

  return (
    <div>
      <h1 className='title'>De 1 a 5, qual nota você daria para o São João 2023? No qual 1 representa a pior avaliação e 05 é a melhor.</h1>
      <div className='container-block'>
        <div className='Block'></div>
        <p className='nota_question9'>Ruim</p>
        <div className={`block ${nota === 1 ? 'selected' : ''}`} id='red' onClick={() => handleNotaClick(1)}>
          <span id='opcaonumerica'>1</span>
        </div>
        <div className={`block ${nota === 2 ? 'selected' : ''}`} id='orange' onClick={() => handleNotaClick(2)}>
          <span id='opcaonumerica'>2</span>
        </div>
        <div className={`block ${nota === 3 ? 'selected' : ''}`} id='yellow' onClick={() => handleNotaClick(3)}>
          <span id='opcaonumerica'>3</span>
        </div>
        <div className={`block ${nota === 4 ? 'selected' : ''}`} id='green-light' onClick={() => handleNotaClick(4)}>
          <span id='opcaonumerica'>4</span>
        </div>
        <div className={`block ${nota === 5 ? 'selected' : ''}`} id='green' onClick={() => handleNotaClick(5)}>
          <span id='opcaonumerica'>5</span>
        </div>
        <p className='nota_question9' id='satisfeito'>Muito Bom</p>
      </div>
      {error && <p className="error_message">Selecione uma nota antes de continuar.</p>}
      <div className='container_button'>
        <button id='button_question9' onClick={handleNextQuestion}>Próxima Pergunta</button>
      </div>
    </div>
  );
};

export default Question9;
