// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import Muitobom from '../assets/rostinhos/Muitobom.png';
import Bom from '../assets/rostinhos/Bom.png';
import Indiferente from '../assets/rostinhos/Indiferente.png';
import Ruim from '../assets/rostinhos/Ruim.png';
import Pessimo from '../assets/rostinhos/Péssimo.png';
import './Estilos/Question2.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png';

const Question2 = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate(); 
  const [avaliacao, setAvaliacao] = useState(null);

  const handleAvaliacaoClick = (valorAvaliacao) => {
    setAvaliacao(valorAvaliacao);
    setError(false); 
  };

  const handleNextQuestion = () => {
    if (!avaliacao) {
      setError(true); 
    } else {
      navigate('/question3');
    }
  };

  return (
    <div>
      <h1 className='title_question2'>O que você achou das atrações?</h1>
      <div className='avaliar'>
        <span id='fraco'>Fraco</span>
        <img className={`carinha carinha-Péssimo ${avaliacao === 'Péssimo' && 'selecionada'}`} src={Pessimo} alt="Péssimo" onClick={() => handleAvaliacaoClick('Péssimo')} />
        <img className={`carinha carinha-Ruim ${avaliacao === 'Ruim' && 'selecionada'}`} src={Ruim} alt="Ruim" onClick={() => handleAvaliacaoClick('Ruim')} />
        <img className={`carinha carinha-Indiferente ${avaliacao === 'Indiferente' && 'selecionada'}`} src={Indiferente} alt="Indiferente" onClick={() => handleAvaliacaoClick('Indiferente')} />
        <img className={`carinha carinha-Bom ${avaliacao === 'Bom' && 'selecionada'}`} src={Bom} alt="Bom" onClick={() => handleAvaliacaoClick('Bom')} />
        <img className={`carinha carinha-MuitoBom ${avaliacao === 'Muito Bom' && 'selecionada'}`} src={Muitobom} alt="Muito Bom" onClick={() => handleAvaliacaoClick('Muito Bom')} />
        <span id='excelente'>Excelente</span>
      </div>
      {error && <p className="error_message">É necessário escolher uma opção.</p>}
      <div className='container_button'>
        <button id='question2_button' onClick={handleNextQuestion}>Próxima Pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img id='logoquestion2' src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question2;
