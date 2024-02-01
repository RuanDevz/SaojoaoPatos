// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png';
import './Estilos/Question5.css';
import Input from '../Components/Form/Input/Input';

const Question5 = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError(false); 
  };

  const handleNextQuestion = () => {
    console.log('Valor do input:', input);
    if (!input.trim()) {
      setError(true); 
    } else {
      console.log('Navegando para a próxima pergunta...');
      navigate('/question6');
    }
  };
  

  return (
    <div className='container_question5'>
      <h1 className='title-question5'>Quais os pontos mais positivos do evento?</h1>
      <div className='container_input_question5'>
      <Input type='text' placeholder='escreva aqui' onchange={handleInputChange}/>
      
      </div>
      {error && <p className="error_message">É necessário preencher este campo.</p>}
      <div className='container_button'>
        <button id='button_question5' onClick={handleNextQuestion}>Próxima pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img id='question5_logo' src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question5;
