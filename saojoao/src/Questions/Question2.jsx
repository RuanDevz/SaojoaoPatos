// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
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


  function navegar(){
    navigate("/question3")
  }


  return (
    <div>
      <h1>O que você achou das atrações ?</h1>
      <div className='avaliar'>
        <span id='avaliar-carinhas' >Fraco</span>
        <img id='carinhas-avaliar' src={Pessimo} alt="Muito bom" onClick={() => handleAvaliacaoClick('Péssimo')} />
        <img id='carinhas-avaliar' src={Ruim} alt="Bom" onClick={() => handleAvaliacaoClick('Ruim')} />
        <img id='carinhas-avaliar' src={Indiferente} alt="Indiferente" onClick={() => handleAvaliacaoClick('Indiferente')} />
        <img id='carinhas-avaliar' src={Bom} alt="Ruim" onClick={() => handleAvaliacaoClick('Bom')} />
        <img id='carinhas-avaliar' src={Muitobom} alt="Pessimo" onClick={() => handleAvaliacaoClick('Muito Bom')} />
        <span id='avaliar-carinhas'>Excelente</span>
      </div>
      <div className='container_button'>

        <button onClick={navegar}>Próxima Pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question2;
