import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Question.css';
import { ReplyQuestions } from '../Context/ReplyQuestions';
import { feedbackContext } from '../Context/FeedbackContext';

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
    <div className="container_question">
      <div className="container_title_question1">
        <h1 className="title_question1">Sobre sua expectativa em relação ao São João 2023:</h1>
      </div>
      <div className="container_box">
        <div
          className={`checkbox ${selectedOption === 'Superou' ? 'selected' : ''}`}
          id="green_light"
          onClick={() => handleOptionSelect('Superou')}
          style={{ border: selectedOption === 'Superou' ? '2px solid #fff' : 'none' }}
        >
          <p>Superou</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'Atendeu Plenamente' ? 'selected' : ''}`}
          id="green"
          onClick={() => handleOptionSelect('Atendeu Plenamente')}
          style={{ border: selectedOption === 'Atendeu Plenamente' ? '2px solid #fff' : 'none' }}
        >
          <p>Atendeu Plenamente</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'Atendeu em parte' ? 'indifferent' : ''}`}
          id="yellow"
          onClick={() => handleOptionSelect('Atendeu em parte')}
          style={{ border: selectedOption === 'Atendeu em parte' ? '2px solid #fff' : 'none' }}
        >
          <p>Atendeu em partes</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'Indiferente' ? 'indifferent' : ''}`}
          id="red"
          onClick={() => handleOptionSelect('Indiferente')}
          style={{ border: selectedOption === 'Indiferente' ? '2px solid #fff' : 'none' }}
        >
          <p>Indiferente</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'Não satisfez' ? 'selected' : ''}`}
          id="red_light"
          onClick={() => handleOptionSelect('Não satisfez')}
          style={{ border: selectedOption === 'Não satisfez' ? '2px solid #fff' : 'none' }}
        >
          <p>Não satisfez</p>
        </div>
      </div>
      {error && <p className="error_message_question1">É necessário escolher uma opção.</p>}
      <div className="container_button">
        <button id="button_question1" onClick={handleNextQuestion}>Próxima Pergunta</button>
      </div>
    </div>
  );
};

export default Question1;
