// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Question9.css';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png';

const Question9 = () => {
  const [selectedCantor, setSelectedCantor] = useState(null);
  const navigate = useNavigate();

window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  useEffect(() => {
    handleNextQuestion();
  }, [selectedCantor]);

  const handleCantorClick = (cantor) => {
    setSelectedCantor(cantor);
  };

  const handleNextQuestion = () => {
    if (selectedCantor !== null) {
      _feedbacks.push(selectedCantor);
      setFeedbacks(_feedbacks);
      console.log(_feedbacks)
      navigate('/question10');
    }
  };

  return (
    <div>
      <header className='container_logo_question9'>
        <img src={logo} alt="alta" />
      </header>
      <div>
        <main className='container_geral_question9'>
          <section className='container_section_question9'>
            <p><span id='orange'>QUEM </span><span id='blue'>NÃO PODE </span><span id='pink'>FALTAR</span> NO SÃO JOÃO  DA GENTE ?</p>
          </section>
          <section className='container_cantores_question9'>
            <div>
              <div className='selected-cantores' onClick={() => handleCantorClick('NATTAN')}>
                <button id='cantorselect'>01</button>
                <p>NATTAN</p>
              </div>
              <div className='selected-cantores' onClick={() => handleCantorClick('RAÍ SAIA RODADA')}>
                <button id='cantorselect'>02</button>
                <p>RAÍ SAIA RODADA</p>
              </div>
              <div className='selected-cantores' onClick={() => handleCantorClick('ALOK')}>
                <button id='cantorselect'>03</button>
                <p>ALOK</p>
              </div>
              <div className='selected-cantores' onClick={() => handleCantorClick('VINTAGE CULTURE')}>
                <button id='cantorselect'>04</button>
                <p>VINTAGE CULTURE</p>
              </div>
            </div>
            <div>
              <div className='selected-cantores' onClick={() => handleCantorClick('LUAN ESTILIZADO')}>
                <button id='cantorselect'>05</button>
                <p>LUAN ESTILIZADO</p>
              </div>
              <div className='selected-cantores' onClick={() => handleCantorClick('CALCINHA PRETA')}>
                <button id='cantorselect'>06</button>
                <p>CALCINHA PRETA</p>
              </div>
              <div className='selected-cantores' onClick={() => handleCantorClick('MARI FERNANDES')}>
                <button id='cantorselect'>07</button>
                <p>MARI FERNANDES</p>
              </div>
              <div className='selected-cantores' onClick={() => handleCantorClick('JORGE MATEUS')}>
                <button id='cantorselect'>08</button>
                <p>JORGE MATEUS</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Question9;
