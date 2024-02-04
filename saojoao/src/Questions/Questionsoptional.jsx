import React, { useState, useContext } from 'react';
import './Estilos/Questionoptional.css';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Form/Input/Input';
import { feedbackContext } from '../Context/FeedbackContext';

const Questionsoptional = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [name, setName] = useState('')
  const navigate = useNavigate();

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const isValidEmail = (email) => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  const handleFinish = () => {
    if (email && !isValidEmail(email)) {
      setError(true);
    } else {
      _feedbacks.push(name)
      _feedbacks.push(email)
      setFeedbacks(_feedbacks)
      setError(false);
      
      navigate('/Finish');

    }
  };

  return (
    <form action="https://api.sheetmonkey.io/form/qe7cB9KXCSfZ8R8DHa3B6y" method='POST'>
    <div className='container_question_optional'>
      <div>
        <h1 className='optional_title'>Qual seu nome ?</h1>
        <div className='container_inputs'>
          <label htmlFor='name'>
          <Input className='input_questions_optionals' type='text' id='name' placeholder='Seu nome (Opcional)' onchange={(e) => setName(e.target.value)}/>
          </label>
        </div>
        <div>
          <h1 className='optional_title'>Qual seu e-mail ?</h1>
          <div className='container_inputs'>
            <label htmlFor='email'>
              <Input className='input_questions_optionals' type='email' id='email' name='email' placeholder='Seu E-mail (opcional)' value={email} onchange={(e) => setEmail(e.target.value)}/>
            </label>
          </div>
          {error && <p className='error_message'>Por favor, insira um e-mail válido.</p>}
        </div>
        <button type='submit' onClick={handleFinish} id='optional_button'>
          Finalizar
        </button>
      </div>
    </div>
    </form>
  );
};

export default Questionsoptional;
