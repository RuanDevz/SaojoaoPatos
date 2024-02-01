import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Question.css';
import logo from '../assets/Logo/Logo.png';
import Usecontext from '../context/Usecontext';

const use

const Question1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setError(false); 
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      setError(true); 
    } else {
      navigate('/question2');
    }
  };

  return (
    <div className="container_question">
      <div className="container_title_question1">
        <h1 className="title_question1">Sobre sua expectativa em relação ao São João 2023:</h1>
      </div>
      <div className="container_box">
        <div
          className={`checkbox ${selectedOption === 'red_light' ? 'selected' : ''}`}
          id="red_light"
          onClick={() => handleOptionSelect('red_light')}
          style={{ border: selectedOption === 'red_light' ? '2px solid #fff' : 'none' }}
        >
          <p>Não satisfez</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'red' ? 'selected' : ''}`}
          id="red"
          onClick={() => handleOptionSelect('red')}
          style={{ border: selectedOption === 'red' ? '2px solid #fff' : 'none' }}
        >
          <p>Atendeu em partes</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'yellow' ? 'selected' : ''}`}
          id="yellow"
          onClick={() => handleOptionSelect('yellow')}
          style={{ border: selectedOption === 'yellow' ? '2px solid #fff' : 'none' }}
        >
          <p>Indiferente</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'green' ? 'selected' : ''}`}
          id="green"
          onClick={() => handleOptionSelect('green')}
          style={{ border: selectedOption === 'green' ? '2px solid #fff' : 'none' }}
        >
          <p>Superou</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'green_light' ? 'selected' : ''}`}
          id="green_light"
          onClick={() => handleOptionSelect('green_light')}
          style={{ border: selectedOption === 'green_light' ? '2px solid #fff' : 'none' }}
        >
          <p>Atendeu Plenamente</p>
        </div>
      </div>
      {error && <p className="error_message">É necessário escolher uma opção.</p>}
      <div className="container_button">
        <button id="button_question1" onClick={handleNextQuestion}>
          Próxima Pergunta
        </button>
      </div>
      <div className="logosaojoao">
        <img id="logo_question1" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question1;
