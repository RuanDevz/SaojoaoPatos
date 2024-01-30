import React, { useState, useEffect } from 'react';
import Muitobom from '../assets/rostinhos/Muitobom.png';
import Bom from '../assets/rostinhos/Bom.png';
import Indiferente from '../assets/rostinhos/Indiferente.png';
import Ruim from '../assets/rostinhos/Ruim.png';
import Pessimo from '../assets/rostinhos/Péssimo.png';
import './Estilos/Question2.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png'

const Question2 = () => {
  const [avaliacao, setAvaliacao] = useState(null);
  const navigate = useNavigate(); 

  const handleAvaliacaoClick = (valorAvaliacao) => {
    setAvaliacao(valorAvaliacao);
  };

  useEffect(() => {
    // Adicione a classe selecionada à carinha clicada
    const carinhaSelecionada = document.querySelector(`.carinha-${avaliacao}`);
    const carinhas = document.querySelectorAll('.carinha');
    carinhas.forEach(carinha => {
      if (carinha !== carinhaSelecionada) {
        carinha.classList.remove('selecionada');
      }
    });
    if (carinhaSelecionada) {
      carinhaSelecionada.classList.add('selecionada');
    }
  }, [avaliacao]);

  function navegar(){
    navigate("/question3")
  }

  return (
    <div>
      <h1 className='title_question2'>O que você achou das atrações?</h1>
      <div className='avaliar'>
        <span id='fraco'>Fraco</span>
        <img className='carinha carinha-Péssimo' src={Pessimo} alt="Péssimo" onClick={() => handleAvaliacaoClick('Péssimo')} />
        <img className='carinha carinha-Ruim' src={Ruim} alt="Ruim" onClick={() => handleAvaliacaoClick('Ruim')} />
        <img className='carinha carinha-Indiferente' src={Indiferente} alt="Indiferente" onClick={() => handleAvaliacaoClick('Indiferente')} />
        <img className='carinha carinha-Bom' src={Bom} alt="Bom" onClick={() => handleAvaliacaoClick('Bom')} />
        <img className='carinha carinha-MuitoBom' src={Muitobom} alt="Muito Bom" onClick={() => handleAvaliacaoClick('Muito Bom')} />
        <span id='excelente'>Excelente</span>
      </div>
      <div className='container_button'>
        <button id='question2_button' onClick={navegar}>Próxima Pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img id='logoquestion2' src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question2;
