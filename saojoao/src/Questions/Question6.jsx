import React, { useState, useContext } from 'react';
import './Estilos/Question6.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';

const FaixaEtariaQuestion = () => {
  const navigate = useNavigate();
  const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState('');
  const [error, setError] = useState(false);

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleFaixaEtariaChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedFaixaEtaria === selectedValue) {
      setSelectedFaixaEtaria('');
    } else {
      setSelectedFaixaEtaria(selectedValue);
    }
  };

  const handleNextQuestion = () => {
    if (!selectedFaixaEtaria) {
      setError(true); 
    } else {
      _feedbacks.push(selectedFaixaEtaria)
      setFeedbacks(_feedbacks)
      navigate('/Questionsoptional');
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
          <span id='fontquestion6'>Abaixo de 20 anos</span>
        </label>
        <label className='container' htmlFor="acimade20">
          <input
            type="checkbox"
            id='acimade20'
            value='acimade20'
            checked={selectedFaixaEtaria === 'acimade20'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span id='fontquestion6'>Entre 20 e 29 anos</span>
        </label>
        <label className='container' htmlFor="acimade30">
          <input
            type="checkbox"
            id='acimade30'
            value='acimade30'
            checked={selectedFaixaEtaria === 'acimade30'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span id='fontquestion6'>Entre 30 e 39 anos</span>
        </label>
        <label className='container' htmlFor="acimade40">
          <input
            type="checkbox"
            id='acimade40'
            value='acimade40'
            checked={selectedFaixaEtaria === 'acimade40'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span id='fontquestion6'>Entre 40 e 49 anos</span>
        </label>
        <label className='container' htmlFor="acimade50">
          <input
            type="checkbox"
            id='acimade50'
            value='acimade50'
            checked={selectedFaixaEtaria === 'acimade50'}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span id='fontquestion6'>Entre 50 e 59 anos</span>
        </label>
        <label className='container' htmlFor="acimade60">
          <input
            type="checkbox"
            id='acimade60'
            value='acimade60'
            checked={selectedFaixaEtaria === 'acimade60'}
            onChange={handleFaixaEtariaChange}
          />
            <div id='checked' className='checkmark'></div>
            <span id='fontquestion66'>Acima de 60 anos</span>
        </label>
      </div>
      {error && <p className="error_message_question6">É necessário selecionar uma faixa etária.</p>}
      <div className='container_button'>
        <button id='button_question6' onClick={handleNextQuestion}>Próxima Pergunta</button>
      </div>
    </div>
  );
};

export default FaixaEtariaQuestion;
