// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../Questions/Estilos/Question4.css';
import { useNavigate } from 'react-router-dom';

const Question4 = () => {
  const [nota, setNota] = useState(null);
  const navigate = useNavigate();

  const handleNotaClick = (notaSelecionada) => {
    setNota(notaSelecionada);
  };

  return (
    <div>
      <h1 className='title'>Em uma escala de 1 a 5, quanto Você ficou satisfeito com a organização do evento?</h1>
      <div className='container-block'>
        <div className='Block'></div>
        <p>Pouco satisfeito</p>
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
        <p id='satisfeito'>Muito satisfeito</p>
      </div>
      <div className='container_button'>
        <button onClick={() => navigate('/question5')} >Próxima Pergunta</button>
      </div>
    </div>
  );
};

export default Question4;
