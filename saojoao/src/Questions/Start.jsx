// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../Questions/Estilos/Start.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo São João/Logosaojoao.png'

const Start = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email inválido');
    } else {
      navigate('/question1');
    }
  };

  return (
    <div className='divgeral'>
      <header className='container_logo'>
        <img src={logo} alt="Logo" />
      </header>
      <main className='container_geral'>
        <section className='start-first-section'>
          <p>O São João sem dúvidas foi um sucesso! Mas como sempre queremos deixar tudo cada vez melhor. Por isso, precisamos saber o que você achou da nossa festa. Então bora contar tudo na pesquisa de satisfação?</p>
          <p><span id='ocean'>Queremos saber:</span> O que curtiu, o que não curtiu e como podemos fazer o São João da gente ficar ainda mais nossa cara nas próximas edições.</p>
          <p className='paragrafo-styled'><span id='orange'>Contamos </span><span>com </span><span id='pink'>seu <br /> Feedback </span><span>vamos lá? </span></p>
        </section>
      </main>
      <section className='start-segund-section'>
        <form onSubmit={handleSubmit} className='container_input'>
          <input type="email" placeholder='Digite seu e-mail...' value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit"><p className='name_button'>INICIAR</p></button>
        </form>
      </section>
      <div className='container_message_error'>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Start;