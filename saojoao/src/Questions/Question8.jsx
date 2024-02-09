import React, { useState, useContext } from 'react';
import './Estilos/Question8.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png'

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
    const { ATRAÇÕES, ESTRUTURAS, ATIVAÇÕES, BARES, ORGANIZAÇÃO, LIMPEZA, SEGURANÇA, outros, outrosText } = selectedFaixaEtaria;
    
    if (!(ATRAÇÕES || ESTRUTURAS || ATIVAÇÕES || BARES || ORGANIZAÇÃO || LIMPEZA || SEGURANÇA || outros)) {
      setError(true);
    } else {
      setError(false);
      const selectedItems = [];
  

  
      
      _feedbacks.push(selectedItems);
      setFeedbacks(_feedbacks);
  
      
      navigate('/question8');
    }
  };
  

  return (
<div className='envolvente'>
  <header className='container_logo_question6'>
    <img src={logo} alt="logo" />
  </header>
  <main className='container_geral_question7'>
    <section className='container_section_question8'>
      <p>EM UMA ESCALA DE <span id='orange'>1 A 5</span>, QUANTO VOCÊ FICOU <span id='pink'>SATISFEITO</span>COM A ORGANIZAÇÃO DO <span id='ocean'> EVENTO ?</span></p>
    </section>
    <section className='container_button_question3'>
          <button onClick={() => navigate('/question9')} id='red'>1</button>
          <button onClick={() => navigate('/question9')} id='darkred'>2</button>
          <button onClick={() => navigate('/question9')} id='yellow'>3</button>
          <button onClick={() => navigate('/question9')} id='darkgreen'>4</button>
          <button onClick={() => navigate('/question9')} id='green'>5</button>
        </section>
  </main>
</div>
  );
};

export default FaixaEtariaQuestion;