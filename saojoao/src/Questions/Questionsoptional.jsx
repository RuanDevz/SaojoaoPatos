import React, { useState } from 'react';
import './Estilos/Questionoptional.css';
import logo from '../assets/Logo/Logo.png';
import { useNavigate } from 'react-router-dom';

const Questionsoptional = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    // Expressão regular para validar o formato do e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleFinish = () => {
    if (email && !isValidEmail(email)) {
      setError(true);
    } else {
      setError(false);
      navigate('/Finish');
    }
  };

  return (
    <div className='container_question_optional'>
      <div>
        <h1>Qual seu nome ?</h1>
        <div className='container_inputs'>
          <label htmlFor='name'>
            <input id='name' type='text' placeholder='Seu nome (opcional)' />
          </label>
        </div>
        <div>
          <h1>Qual seu e-mail ?</h1>
          <div className='container_inputs'>
            <label htmlFor='email'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Seu email (Opcional)'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          {error && <p className='error_message'>Por favor, insira um e-mail válido.</p>}
        </div>
        <button onClick={handleFinish} id='optional_button'>
          Finalizar
        </button>
      </div>
      <div className='logosaojoao'>
        <img id='optional_logo' src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default Questionsoptional;
