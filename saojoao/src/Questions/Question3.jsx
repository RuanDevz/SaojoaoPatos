import React, { useState, useContext } from 'react';
import './Estilos/Question3.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png';

const Question3 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  
  if (selectedCard !== null) {
    const options = ['1', '2', '3', '4', '5'];
    const selectedOption = options[selectedCard];
    
    _feedbacks.push(selectedOption)
    setFeedbacks(_feedbacks)
    console.log(_feedbacks)
    navigate("/question4");
  }

  return (
    <div className='containergeral_question3'>
      <div className='container_logo_question3'>
        <img src={logo} alt="LOGO" />
      </div>
      <main className='container_geral_question3'>
        <section className='section_question3'>
          <p>DE<span id='orange'> 1 A 5</span>, QUAL <span id='pink'>NOTA <br /></span> VOCÊ DARIA PARA <br /> O <span id='ocean'>SÃO JOÃO 2023</span>?</p>
        </section>
        <section className='container_button_question3'>
          <button onClick={() => handleCardClick(0)} id='red'>1</button>
          <button onClick={() => handleCardClick(1)} id='darkred'>2</button>
          <button onClick={() => handleCardClick(2)} id='yellow'>3</button>
          <button onClick={() => handleCardClick(3)} id='darkgreen'>4</button>
          <button onClick={() => handleCardClick(4)} id='green'>5</button>
        </section>
      </main>
    </div>
  );
};

export default Question3;
