import React, { useState, useContext } from 'react';
import './Estilos/Question7.css';
import Button from '../Components/Form/Button/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png';
import { feedbackContext } from '../Context/FeedbackContext';

const FaixaEtariaQuestion = () => {
  const navigate = useNavigate();
  const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState({
    'ATRAÇÕES': false,
    'ESTRUTURAS': false,
    'ATIVAÇÕES': false,
    'BARES': false,
    'ORGANIZAÇÃO': false,
    'LIMPEZA': false,
    'SEGURANÇA': false,
    'outros': false,
    'outrosText': '',
  });
  const [error, setError] = useState(false);

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleFaixaEtariaChange = (event) => {
    const { id, checked } = event.target;
    const updatedSelection = { ...selectedFaixaEtaria, [id]: checked };

    if (checked) {
      for (const key in updatedSelection) {
        if (key !== id && key !== 'outrosText') {
          updatedSelection[key] = false;
        }
      }
    }
   
    setSelectedFaixaEtaria(updatedSelection);
  };

  const handleOutrosTextChange = (event) => {
    setSelectedFaixaEtaria((prevSelected) => ({
      ...prevSelected,
      'outrosText': event.target.value,
    }));
  };

  const handleNextQuestion = () => {
    const { ATRAÇÕES, ESTRUTURAS, ATIVAÇÕES, BARES, ORGANIZAÇÃO, LIMPEZA, SEGURANÇA, outros} = selectedFaixaEtaria;
    
    if (!(ATRAÇÕES || ESTRUTURAS || ATIVAÇÕES || BARES || ORGANIZAÇÃO || LIMPEZA || SEGURANÇA || outros)) {
      setError(true);
    } else {
      setError(false);
      _feedbacks.push(selectedFaixaEtaria)
      setFeedbacks(_feedbacks)
      navigate('/question8');
    }
  };

  return (
<div className='envolvente'>
  <h1 className='question-title'>O que você <span id='mais'>mais</span> gostou ?</h1>
  <div className='container_geral'>
    {Object.entries(selectedFaixaEtaria).map(([key, value]) => {
      if (key !== 'outrosText' && key !== 'outros') {
        return (
          <div key={key}>
            <label className='container' htmlFor={key}>
              <input
                type="checkbox"
                id={key}
                checked={value}
                onChange={handleFaixaEtariaChange}
              />
              <div className='checkmark'></div>
              <span>{key}</span>
            </label>
          </div>
        );
      }
      return null;
    })}
  </div>
  {selectedFaixaEtaria['outros'] && (
    <div className='container_input_especifique'>
      <input
        className='especifique'
        type="text"
        value={selectedFaixaEtaria['outrosText']}
        onChange={handleOutrosTextChange}
        placeholder="Especifique"
      />
    </div>
  )}
  {error && <p className="error_message">Selecione pelo menos uma opção.</p>}
  <div className='container_button'>
    <button id='button_7' onClick={handleNextQuestion}>Próxima pergunta</button>
  </div>
</div>
  );
};

export default FaixaEtariaQuestion;