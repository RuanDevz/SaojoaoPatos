// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Estilos/Question7.css';
import Button from '../Components/Form/Button/Button'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png'

const FaixaEtariaQuestion = () => {
  const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState('');

  const navigate = useNavigate()

  const handleFaixaEtariaChange = (event) => {
    const selectedValue = event.target.value;

    // Se a opção já estiver selecionada, desmarca todas as opções
    if (selectedFaixaEtaria === selectedValue) {
      setSelectedFaixaEtaria('');
    } else {
      // Se a opção não estiver selecionada, marca a opção e desmarca as outras
      setSelectedFaixaEtaria(selectedValue);
    }
  };

  return (
    <div>
      <h1 className='question-title'>O que você <span id='mais'>mais</span> gostou ?</h1>
      <div className='container_geral'>
        <label className='container' htmlFor="abaixode20">
          <input
            type="checkbox"
            id='abaixode20'
            value='abaixode20'
            checked={selectedFaixaEtaria === 'abaixode20'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span>ATRACOES</span>
        </label>
      </div>
      <div>
        <label className='container' htmlFor="acimade20">
          <input
            type="checkbox"
            id='acimade20'
            value='acimade20'
            checked={selectedFaixaEtaria === 'acimade20'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span>ESTRUTURAS</span>
        </label>
      </div>
      <div>
        <label className='container' htmlFor="acimade30">
          <input
            type="checkbox"
            id='acimade30'
            value='acimade30'
            checked={selectedFaixaEtaria === 'acimade30'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span>ATIVAÇÕES</span>
        </label>
      </div>
      <div>
        <label className='container' htmlFor="acimade40">
          <input
            type="checkbox"
            id='acimade40'
            value='acimade40'
            checked={selectedFaixaEtaria === 'acimade40'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span>BARES</span>
        </label>
      </div>
      <div>
        <label className='container' htmlFor="acimade50">
          <input
            type="checkbox"
            id='acimade50'
            value='acimade50'
            checked={selectedFaixaEtaria === 'acimade50'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span>ORGANIZAÇÃO</span>
        </label>
      </div>
      <div>
        <label className='container' htmlFor="acimade60">
          <input
            type="checkbox"
            id='acimade60'
            value='acimade60'
            checked={selectedFaixaEtaria === 'acimade60'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span>LIMPEZA</span>
        </label>
      </div>
      <div>
        <label className='container' htmlFor="acimade60">
          <input
            type="checkbox"
            id='acimade60'
            value='acimade60'
            checked={selectedFaixaEtaria === 'acimade60'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span>SEGURANÇA</span>
        </label>
      </div>
      <div>
        <label className='container' htmlFor="acimade60">
          <input
            type="checkbox"
            id='acimade60'
            value='acimade60'
            checked={selectedFaixaEtaria === 'acimade60'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span>OUTROS</span>
        </label>
      </div>
      <div className='container_button'>
        <button onClick={() => navigate('/question8')} >Próxima pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default FaixaEtariaQuestion;
