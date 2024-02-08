import React, { useContext, useState } from 'react';
import './Estilos/Question2.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import Button from '../Components/Form/Button/ButtonProximapagina'
import ButtonProximapagina from '../Components/Form/Button/ButtonProximapagina';

const Question2 = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate(); 
  const [avaliacao, setAvaliacao] = useState(null);

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleAvaliacaoClick = (valorAvaliacao) => {
    setAvaliacao(valorAvaliacao);
    setError(false); 
  };

  const handleNextQuestion = () => {
    if (!avaliacao) {
      setError(true); 
    } else {
      _feedbacks.push(avaliacao)
      setFeedbacks(_feedbacks)
      console.log(feedbacks)
      navigate('/question1');
    }
  };

  return (
    <div>
      <h1>EM DESENVOLVIMENTO</h1>
      <div className='container_desenvolvimeto'>
        <button onClick={() => navigate('/question3')}>PRÓXIMA PERGUNTA >>></button>
      </div>
    </div>
  );
};

export default Question2;
