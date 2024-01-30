// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../Questions/Estilos/Question4.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png'

const Question4 = () => {
  const [nota, setNota] = useState(null);
  const navigate = useNavigate();

  const handleNotaClick = (notaSelecionada) => {
    setNota(notaSelecionada);
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
      <div className='container_button'>
        <button id='question4_button' onClick={() => navigate('/question5')} >Próxima Pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img id='logo_question4' src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question4;
