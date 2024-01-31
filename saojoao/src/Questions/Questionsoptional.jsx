// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Estilos/Question7.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png';

const FaixaEtariaQuestion = () => {
  const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState({
    atracoes: false,
    estruturas: false,
    ativacoes: false,
    bares: false,
    organizacao: false,
    limpeza: false,
    seguranca: false,
    outros: false,
  });
  const [otherValue, setOtherValue] = useState('');
  const navigate = useNavigate();

  const handleFaixaEtariaChange = (event) => {
    const { id, checked } = event.target;
    setSelectedFaixaEtaria((prevSelected) => ({
      ...prevSelected,
      [id]: checked,
    }));
    
    if (id === 'outros') {
      setOtherValue('');
    }
  };

  return (
    <div>
      <h1 className='question-title'>O que você <span id='mais'>mais</span> gostou ?</h1>
      <div className='container_geral'>
        <label>
          <input
            type="checkbox"
            id="outros"
            checked={selectedFaixaEtaria.outros}
            onChange={handleFaixaEtariaChange}
          />
          Outros
        </label>
      </div>
      {selectedFaixaEtaria.outros && (
        <div>
          <label htmlFor="outrosInput">Por favor, especifique:</label>
          <input
            type="text"
            id="outrosInput"
            value={otherValue}
            onChange={(event) => setOtherValue(event.target.value)}
          />
        </div>
      )}
      <div className='container_button'>
        <button id='button_7' onClick={() => navigate('/question8')} >Próxima pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img id='logo_question7' src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default FaixaEtariaQuestion;
