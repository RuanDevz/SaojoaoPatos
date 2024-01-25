// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Estilos/Question6.css';
import Button from '../Components/Form/Button/Button'

const FaixaEtariaQuestion = () => {
  const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState('');

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
      <h1 className='question-title'>Qual sua faixa etária?</h1>
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
          <span>Abaixo de 20 anos</span>
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
          <span>Entre 20 e 29 anos</span>
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
          <span>Entre 30 e 39 anos</span>
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
          <span>Entre 40 e 49 anos</span>
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
          <span>Entre 50 e 59 anos</span>
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
          <span>Acima de 60 anos</span>
        </label>
      </div>
      <div className='container_button'>
        <Button Children='Próxima Pergunta' />
      </div>
    </div>
  );
};

export default FaixaEtariaQuestion;
