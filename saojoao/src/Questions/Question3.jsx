import React, { useState, useContext } from 'react';
import './Estilos/Question3.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import buttonProximapagina from '../Components/Form/Button/ButtonProximapagina'
import ButtonProximapagina from '../Components/Form/Button/ButtonProximapagina';

const Question3 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setError(false); 
  };

  const handleNextQuestion = () => {
    if (selectedCard === null) {
      setError(true); 
    } else {
      
      const options = ['Muito Bom', 'Bom', 'Indiferente', 'Ruim', 'Péssimo'];
      const selectedOption = options[selectedCard];

      
      setFeedbacks(prevFeedbacks => [...prevFeedbacks, selectedOption]);
      
      navigate("/question4");
    }
  };

  return (
    <div className='containergeral_question3'>
      <main>
        <section className='section_question3'>
          <p>DE<span id='orange'> 1 A 5</span>, QUAL <span id='pink'>NOTA <br /></span> VOCÊ DARIA PARA <br /> O <span id='ocean'>SÃO JOÃO 2023?</span></p>
        </section>
        <section className='container_button_question3'>
          <button id='red'>1</button>
          <button id='darkred'>2</button>
          <button id='yellow'>3</button>
          <button id='darkgreen'>4</button>
          <button id='green'>5</button>
        </section>
      </main>
      <div className='container_button'>
        <ButtonProximapagina Children='PRÓXIMA PERGUNTA >>>'  />
      </div>
    </div>
  )

      
};

export default Question3;
