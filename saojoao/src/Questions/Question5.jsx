// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Question5.css';
import Input from '../Components/Form/Input/Input';
import { feedbackContext } from '../Context/FeedbackContext';

const Question5 = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError(false); 
  };

  const handleNextQuestion = () => {
    if (!input.trim()) {
      setError(true); 
    } else {
      _feedbacks.push(input)
      setFeedbacks(_feedbacks)
      navigate('/Question6');
    }
  };
  

  return (
    <div className='container_question5'>
      <h1 className='title-question5'>Quais os pontos mais positivos do evento?</h1>
      <div className='container_input_question5'>
      <Input type='text' placeholder='Escreva aqui...' onchange={handleInputChange}/>
      
      </div>
      {error && <p className="error_message_question5">É necessário preencher este campo.</p>}
      <div className='container_button'>
        <button id='button_question5' onClick={handleNextQuestion}>Próxima pergunta</button>
      </div>
    </div>
  );
};

export default Question5;
