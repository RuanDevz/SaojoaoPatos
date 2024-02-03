// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import Muitobom from '../assets/rostinhos/Muitobom.png';
import Bom from '../assets/rostinhos/Bom.png';
import Indiferente from '../assets/rostinhos/Indiferente.png';
import Ruim from '../assets/rostinhos/Ruim.png';
import Pessimo from '../assets/rostinhos/Péssimo.png';
import './Estilos/Question2.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';

const Question2 = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate(); 
  const [avaliacao, setAvaliacao] = useState(null);

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleAvaliacaoClick = (valorAvaliacao) => {
    setAvaliacao(valorAvaliacao);
    setError(false); 
  };

  const handleNextQuestion = () => {
    if (!avaliacao) {
      setError(true); 
    } else {
      _feedbacks.push(avaliacao)
      setFeedbacks(_feedbacks)
      console.log(feedbacks)
      navigate('/question3');
    }
  };

  return (
    <div>
      <h1 className='title_question2'>Qual o seu nível de satisfação com as atracões? Sendo: 01 estrela para fraco e 05 estrelas para excelente</h1>
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
    </div>
  );
};

export default Question2;
