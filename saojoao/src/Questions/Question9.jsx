// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../Questions/Estilos/Question4.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png'

const Question9 = () => {
  const [nota, setNota] = useState(null);
  const navigate = useNavigate();

  const handleNotaClick = (notaSelecionada) => {
    setNota(notaSelecionada);
  };

  return (
    <div>
      <h1 className='title'>De 1 a 5, qual nota você daria para o São João 2023? No qual 1 representa a pior avaliação e 05 é a melhor.</h1>
      <div className='container-block'>
        <div className='Block'></div>
        <p>Ruim</p>
        <div className={`block ${nota === 1 ? 'selected' : ''}`} id='red' onClick={() => handleNotaClick(1)}>
          <span>1</span>
        </div>
        <div className={`block ${nota === 2 ? 'selected' : ''}`} id='orange' onClick={() => handleNotaClick(2)}>
          <span>2</span>
        </div>
        <div className={`block ${nota === 3 ? 'selected' : ''}`} id='yellow' onClick={() => handleNotaClick(3)}>
          <span>3</span>
        </div>
        <div className={`block ${nota === 4 ? 'selected' : ''}`} id='green-light' onClick={() => handleNotaClick(4)}>
          <span>4</span>
        </div>
        <div className={`block ${nota === 5 ? 'selected' : ''}`} id='green' onClick={() => handleNotaClick(5)}>
          <span>5</span>
        </div>
        <p id='satisfeito'>Muito Bom</p>
      </div>
      <div className='container_button'>
        <button onClick={() => navigate('/question5')} >Próxima Pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question9;
