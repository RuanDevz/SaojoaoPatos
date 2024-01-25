// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Muitobom from '../assets/rostinhos/Muitobom.png';
import Bom from '../assets/rostinhos/Bom.png';
import Indiferente from '../assets/rostinhos/Indiferente.png';
import Ruim from '../assets/rostinhos/Ruim.png';
import Pessimo from '../assets/rostinhos/Péssimo.png';
import './Estilos/Question2.css';
import { useNavigate } from 'react-router-dom';

const Question2 = () => {
  const [avaliacao, setAvaliacao] = useState(null);
  const navigate = useNavigate(); // Mova a declaração do hook para dentro do componente

  const handleAvaliacaoClick = (valorAvaliacao) => {
    // Atualiza o estado com a avaliação selecionada
    setAvaliacao(valorAvaliacao);
  };


  function navegar(){
    navigate("/question3")
  }


  return (
    <div>
      <h1>Você ficou satisfeito com a programação?</h1>
      <div className='avaliar'>
        <span>Fraco</span>
        <img src={Pessimo} alt="Muito bom" onClick={() => handleAvaliacaoClick('Péssimo')} />
        <img src={Ruim} alt="Bom" onClick={() => handleAvaliacaoClick('Ruim')} />
        <img src={Indiferente} alt="Indiferente" onClick={() => handleAvaliacaoClick('Indiferente')} />
        <img src={Bom} alt="Ruim" onClick={() => handleAvaliacaoClick('Bom')} />
        <img src={Muitobom} alt="Pessimo" onClick={() => handleAvaliacaoClick('Muito Bom')} />
        <span>Excelente</span>
      </div>
      <div className='container_button'>
        {/* Adiciona um botão para enviar a avaliação */}
        <button onClick={navegar}>Próximam Pergunta</button>
      </div>
    </div>
  );
};

export default Question2;
