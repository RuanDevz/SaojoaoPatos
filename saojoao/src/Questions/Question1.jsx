import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Question.css';
import { feedbackContext } from '../Context/FeedbackContext';
import ButtonProximapagina from '../Components/Form/Button/ButtonProximapagina';
import logo from '../assets/Logo São João/Logosaojoao.png'

const Question1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleNextQuestion = (option) => { 
    if (!option) {
      setError(true); 
    } else {
      _feedbacks.push(option);
      setFeedbacks(_feedbacks);
      console.log(feedbacks);
      navigate('/question3');
    }
  };

  return (
    <div>
        <div className='container_logo_question1'>
          <img src={logo} alt="logo" />
        </div>
      <main className='container_main_geral'>
        <section className='first-section-question1'>
          <h1 className='title-white'><span id='pink'>SOBRE SUA </span> EXPECTATIVA <span id='orange'>EM RELAÇÃO AO </span>SÃO JOÃO 2023:</h1>
        </section>
        <section className='container_button'>
          <button id='green' onClick={() => handleNextQuestion("SUPEROU")}>SUPEROU</button>
          <button id='darkgreen' onClick={() => handleNextQuestion("ATENDEU PLENAMENTE")}>ATENDEU PLENAMENTE</button>
          <button id='yellow' onClick={() => handleNextQuestion("ATENDEU EM PARTES")}>ATENDEU EM PARTES</button>
          <button id='darkred' onClick={() => handleNextQuestion("INDIFERENTE")}>INDIFERENTE</button>
          <button id='red' onClick={() => handleNextQuestion("NÃO SATISFEITO")}>NÃO SATISFEITO</button>
          <div className='container_button_question1'>
          <ButtonProximapagina onClick={handleNextQuestion} Children='PRÓXIMA PERGUNTA >>>'/>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Question1;
