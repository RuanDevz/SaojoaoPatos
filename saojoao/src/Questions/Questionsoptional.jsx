import React, { useState, useContext } from 'react';
import './Estilos/Questionoptional.css';
import Input from '../Components/Form/Input/Input';
import { feedbackContext } from '../Context/FeedbackContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Questionsoptional = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleFinish = async () => {
    if (email && !isValidEmail(email)) {
      setError(true);
    } else {
      _feedbacks.push(name);
      _feedbacks.push(email);
      console.log(_feedbacks)
      setFeedbacks(_feedbacks);
      setError(false);
      navigate('/Finish');
      const response = await fetch('https://api.sheetmonkey.io/form/hhMBBnwKBRedYAnrdouJKL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(_feedbacks),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setFeedbacks(feedbacks);
      } else {
        console.error('Form submission failed:', response.status);
      }
    }
  };

  return (
    <form>
      <div className='container_question_optional'>
        <div>
          <h1 className='optional_title'>Qual seu nome ?</h1>
          <div className='container_inputs'>
            <label htmlFor='name'>
              <input className='search-input'  type='text' id='name' placeholder='Seu nome (Opcional)' onChange={(e) => setName(e.target.value)}/>
            </label>
          </div>
        </div>
        <div>
          <h1 className='optional_title'>Qual seu e-mail ?</h1>
          <div className='container_inputs'>
            <label htmlFor='email'>
              <input className='search-input'  type='email' id='email' name='email' placeholder='Seu E-mail (opcional)' onChange={(e) => setEmail(e.target.value)}/>
            </label>
          </div>
          {error && <p className='error_message'>Por favor, insira um e-mail válido.</p>}
        </div>
        <button type='button' onClick={handleFinish} id='optional_button'>
          Finalizar
        </button>
      </div>
    </form>
  );
};

export default Questionsoptional;
