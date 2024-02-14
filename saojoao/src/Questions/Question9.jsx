import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/Question9.css';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png';

const Question9 = () => {
  const [selectedCantor, setSelectedCantor] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

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
      setError(false);
      navigate('/question10');
    }
  };

  return (
    <div>
      <header className='container_logo_question9'>
        <img src={logo} alt="alta" />
      </header>
      <main className='container_geral_question9'>
        <section className='container_section_question9'>
          <p><span id='orange'>QUEM </span><span id='blue'>NÃO PODE <br /></span><span id='pink'>FALTAR</span> NO SÃO JOÃO <br /> DA GENTE ?</p>
        </section>
        <section>
          <div className='selected-cantores' onClick={() => handleCantorClick('NATTAN')}>
            <button>1</button>
            <p>NATTAN</p>
          </div>
          <div className='selected-cantores' onClick={() => handleCantorClick('JONAS ESTICADO')}>
            <button>2</button>
            <p>JONAS ESTICADO</p>
          </div>
          <div className='selected-cantores' onClick={() => handleCantorClick('ALOK')}>
            <button>3</button>
            <p>ALOK</p>
          </div>
          <div className='selected-cantores' onClick={() => handleCantorClick('VINTAGE CULTURE')}>
            <button>4</button>
            <p>VINTAGE CULTURE</p>
          </div>
          <div className='selected-cantores' onClick={() => handleCantorClick('LUAN ESTILIZADO')}>
            <button>5</button>
            <p>LUAN ESTILIZADO</p>
          </div>
          <div className='selected-cantores' onClick={() => handleCantorClick('CALCINHA PRETA')}>
            <button>6</button>
            <p>CALCINHA PRETA</p>
          </div>
          <div className='selected-cantores' onClick={() => handleCantorClick('MARI FERNANDES')}>
            <button>7</button>
            <p>MARI FERNANDES</p>
          </div>
          <div className='selected-cantores' onClick={() => handleCantorClick('JORGE MATEUS')}>
            <button>8</button>
            <p>JORGE MATEUS</p>
          </div>
        </section>
        {error && <p style={{ color: 'red' }}>Por favor, selecione um cantor.</p>}
      </main>
    </div>
  );
};

export default Question9;
