import React, { useState, useContext } from 'react';
import './Estilos/Question6.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo São João/Logosaojoao.png'
import { feedbackContext } from '../Context/FeedbackContext';

const FaixaEtariaQuestion = () => {
  const navigate = useNavigate();
  const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState('');
  const [error, setError] = useState(false);

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleFaixaEtariaChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedFaixaEtaria === selectedValue) {
      setSelectedFaixaEtaria('');
    } else {
      setSelectedFaixaEtaria(selectedValue);
    }
  };

  const handleNextQuestion = () => {
    if (!selectedFaixaEtaria) {
      setError(true); 
    } else {
      _feedbacks.push(selectedFaixaEtaria)
      setFeedbacks(_feedbacks)
      navigate('/Questionsoptional');
    }
  };

  return (
    <div>
      <header className='container_logo_question6'>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <section className='container_section_question6'>
          <p>SOBRE A <span id='orange'>ESTRUTURA <br /></span> DO <span id='pink'>EVENTO</span> VOCÊ <br /><span id='ocean'> GOSTOU ?</span></p>
        </section>
        <section className='container_section2_question6'>
          <div>
            <div></div>
            <button>NÃO GOSTEI</button>
          </div>
          <div>
            <div></div>
            <button>PODERIA MELHORAR</button>
          </div>
          <div>
            <div></div>
            <button>INDIFERENTE</button>
          </div>
          <div>
            <div></div>
            <button>GOSTEI</button>
          </div>
          <div>
            <div></div>
            <button>GOSTEI MUITO</button>
          </div>
        </section>
      </main>
      <div id='button_nextquestion' className='container_button_question4'>
        <button onClick={() => navigate('/question7')}>PRÓXIMA PERGUNTA >>></button>
      </div>
    </div>
  );
};

export default FaixaEtariaQuestion;
