// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from 'react';
import './Estilos/Question10.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png';

const Question10 = () => {
  const navigate = useNavigate();
  const [selectedCantor, setSelectedCantor] = useState(null);
  const { feedbacks, setFeedbacks, setError } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  useEffect(() => {
    handleNextQuestion();
  }, [selectedCantor]);

  const handleCantorClick = (cantor) => {
    setSelectedCantor(cantor);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (selectedCantor === null) {
      setError(true);
    } else {
      _feedbacks.push(selectedCantor);
      setFeedbacks(_feedbacks);
      console.log(_feedbacks)
      navigate('/question11');
    }
  };

  return (
    <div>
      <header className='container_logo_question9'>
        <img src={logo} alt="alta" />
      </header>
      <main className='container_geral_question9'>
        <section className='container_section_question9'>
          <p><span id='orange'>QUEM </span><span id='blue'>NÃO PODE</span><span id='pink'> FALTAR</span> NO SÃO JOÃO DA GENTE ?</p>
        </section>
        <section className='container_cantores_question10'>
          <div>
            <div className='selected-cantores' onClick={() => handleCantorClick('PROJETO À VONTADE')}>
              <button id='cantorselect'>09</button>
              <p>PROJETO À VONTADE</p>
            </div>
            <div className='selected-cantores' onClick={() => handleCantorClick('MURILO HULFF')}>
              <button id='cantorselect'>10</button>
              <p>MURILO HULFF</p>
            </div>
            <div className='selected-cantores' onClick={() => handleCantorClick('MATHEUS E KAUAN')}>
              <button id='cantorselect'>11</button>
              <p>MATHEUS E KAUAN</p>
            </div>
            <div className='selected-cantores' onClick={() => handleCantorClick('SIMONE MENDES')}>
              <button id='cantorselect'>12</button>
              <p>SIMONE MENDES</p>
            </div>
          </div>
          <div>
            <div className='selected-cantores' onClick={() => handleCantorClick('LUAN SANTANA')}>
              <button id='cantorselect'>13</button>
              <p>LUAN SANTANA</p>
            </div>
            <div className='selected-cantores' onClick={() => handleCantorClick('GUSTAVO LIMA')}>
              <button id='cantorselect'>14</button>
              <p>GUSTAVO LIMA</p>
            </div>
            <div className='selected-cantores' onClick={() => handleCantorClick('XAND AVIÃO')}>
              <button id='cantorselect'>15</button>
              <p>XAND AVIÃO</p>
            </div>
            <div className='selected-cantores' onClick={() => handleCantorClick('HENRY FREITAS')}>
              <button id='cantorselect'>16</button>
              <p>HENRY FREITAS</p>
            </div>
          </div>
        </section>
      </main> 
    </div>
  );
}

export default Question10;