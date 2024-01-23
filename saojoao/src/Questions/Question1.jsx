// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Button from '../Components/Form/Button/Button';
import { useNavigate, Link } from 'react-router-dom';
import './Estilos/Question.css';

const Question1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Importa o hook useNavigate do react-router-dom

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Lógica para armazenar a resposta, se necessário
    // ...

    // Navega para a próxima pergunta, substituindo a entrada atual no histórico
    navigate('/question3', { replace: true });
  };

  return (
    <div className='container_question'>
      <h1>Sobre sua expectativa em relação ao São João:</h1>
      <div className='container_box'>
        <div
          className={`checkbox ${selectedOption === 'red' ? 'selected' : ''}`}
          id='red'
          onClick={() => handleOptionSelect('red')}
        >
          <p>Não satisfez</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'red_light' ? 'selected' : ''}`}
          id='red_light'
          onClick={() => handleOptionSelect('red_light')}
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
          className={`checkbox ${selectedOption === 'green_light' ? 'selected' : ''}`}
          id='green_light'
          onClick={() => handleOptionSelect('green_light')}
        >
          <p>Superou</p>
        </div>
        <div
          className={`checkbox ${selectedOption === 'green' ? 'selected' : ''}`}
          id='green'
          onClick={() => handleOptionSelect('green')}
        >
          <p>Atendeu Plenamente</p>
        </div>
      </div>
      <div className='container_button'>
        {/* Use o botão diretamente e chame a função handleNextQuestion */}
        <Link to='Question2'><Button Children='Próxima Pergunta' onClick={handleNextQuestion}>Próxima Pergunta</Button></Link>
      </div>
    </div>
  );
};

export default Question1;
