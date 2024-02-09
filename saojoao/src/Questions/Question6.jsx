import React, { useState, useContext } from 'react';
import './Estilos/Question6.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo São João/Logosaojoao.png'
import { feedbackContext } from '../Context/FeedbackContext';
import Pessimo from '../assets/TRIANGULOS/Pessimo.png'
import Ruim from '../assets/TRIANGULOS/Ruim.png'
import Indiferente from '../assets/TRIANGULOS/Indiferente.png'
import Bom from '../assets/TRIANGULOS/Bom.png'
import Muitobom from '../assets/TRIANGULOS/Muitobom.png'

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
            <img src={Pessimo} alt=">NÃO GOSTEI" />
            <button onClick={() => navigate('/question7')}>NÃO GOSTEI</button>
          </div>
          <div>
            <img src={Ruim} alt="PODERIA MELHORAR" />
            <button onClick={() => navigate('/question7')}>PODERIA MELHORAR</button>
          </div>
          <div>
             <img src={Indiferente} alt="INDIFERENTE" />
            <button onClick={() => navigate('/question7')}>INDIFERENTE</button>
          </div>
          <div>
             <img src={Bom} alt="GOSTEI" />
            <button onClick={() => navigate('/question7')}>GOSTEI</button>
          </div>
          <div>
             <img src={Muitobom} alt="GOSTEI MUITO" />
            <button onClick={() => navigate('/question7')}>GOSTEI MUITO</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FaixaEtariaQuestion;
