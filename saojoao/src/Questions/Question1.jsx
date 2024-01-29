// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate,} from 'react-router-dom';
import './Estilos/Question.css';
import logo from '../assets/Logo/Logo.png'

const Question1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); 

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='container_question'>
      <h1>Sobre sua expectativa em relação ao São João 2023:</h1>
      <div className='container_box'>
        <div
          className={`checkbox ${selectedOption === 'red-light' ? 'selected' : ''}`}
          id='red_light'
          onClick={() => handleOptionSelect('red_light')}
        >
          <p>Não satisfez</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'red' ? 'selected' : ''}`}
          id='red'
          onClick={() => handleOptionSelect('red')}
        >
          <p>Atendeu em partes</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'yellow' ? 'selected' : ''}`}
          id='yellow'
          onClick={() => handleOptionSelect('yellow')}
        >
          <p>Indiferente</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'green' ? 'selected' : ''}`}
          id='green'
          onClick={() => handleOptionSelect('green')}
        >
          <p>Superou</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'green_light' ? 'selected' : ''}`}
          id='green_light'
          onClick={() => handleOptionSelect('green_light')}
        >
          <p>Atendeu Plenamente</p>
        </div>
      </div>
      <div className='container_button'>
        <button onClick={() => navigate('/question2')}>Próxima Pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question1;
