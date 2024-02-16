import React, { useState, useContext } from 'react';
import './Estilos/Question12.css';
import logo from '../assets/Logo São João/Logosaojoao.png';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';

const Question12 = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const { feedbacks, setFeedbacks, setError, error } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleFinish = async (e) => {
    if (Name.trim().length < 2) {
      setError(true);
    } else {
      _feedbacks.push(Name);
      setFeedbacks(_feedbacks);
      setError(false);
      console.log(_feedbacks)
      navigate('/finish');

      e.preventDefault();

      const response =  await fetch('https://api.sheetmonkey.io/form/hhMBBnwKBRedYAnrdouJKL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(_feedbacks),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setFeedbacks(_feedbacks); 
      } else {
        console.error('Form submission failed:', response.status);
      }
    }
  };

  return (
    <div>
      <header className='container_logo_question12'>
        <img src={logo} alt="logo" />
      </header>
      <main className='container_main_question12'>
        <h1>QUAL SEU <br /> <span id='orange'>NOME?</span></h1>
        <form action="https://api.sheetmonkey.io/form/hhMBBnwKBRedYAnrdouJKL" method='POST'>
          <div className='container_input_question12'>
            <input minLength='3' maxLength='30' type="text" placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='container_button_question12'>
            <button id='proximapergunta' onClick={handleFinish}>FINALIZAR</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Question12;