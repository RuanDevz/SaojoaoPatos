import React, { useState, useContext } from 'react';
import './Estilos/Question6.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo São João/Logosaojoao.png';
import { feedbackContext } from '../Context/FeedbackContext';
import Pessimo from '../assets/TRIANGULOS/Pessimo.png';
import Ruim from '../assets/TRIANGULOS/Ruim.png';
import Indiferente from '../assets/TRIANGULOS/Indiferente.png';
import Bom from '../assets/TRIANGULOS/Bom.png';
import Muitobom from '../assets/TRIANGULOS/Muitobom.png';

const Question6 = () => {
  const navigate = useNavigate();
  const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState('');
  const [error, setError] = useState(false);

window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handlevote = (value) => {
    setSelectedFaixaEtaria(value);
    _feedbacks.push(value);
    setFeedbacks(_feedbacks);
    console.log(_feedbacks);
    navigate('/question7');
  };

  return (
    <div>
      <header className='container_logo_question6'>
        <img src={logo} alt="logo" />
      </header>
      <main className='container_geral_question6'>
        <section className='container_section_question6'>
          <p>SOBRE A <span id='orange'>ESTRUTURA <br /></span> DO <span id='pink'>EVENTO</span> VOCÊ <br /><span id='ocean'> GOSTOU ?</span></p>
        </section>
        <section className='container_section2_question6'>
          <div>
            <img src={Pessimo} alt="NÃO GOSTEI" />
            <button id='naogostei' onClick={() => handlevote('NÃO GOSTEI')}>NÃO GOSTEI</button>
          </div>
          <div>
            <img src={Ruim} alt="PODERIA MELHORAR" />
            <button id='poderiamelhorar' onClick={() => handlevote('PODERIA MELHORAR')}>PODERIA MELHORAR</button>
          </div>
          <div>
             <img src={Indiferente} alt="INDIFERENTE" />
            <button id='indiferenteb' onClick={() => handlevote('INDIFERENTE')}>INDIFERENTE</button>
          </div>
          <div>
             <img src={Bom} alt="GOSTEI" />
            <button id='bom' onClick={() => handlevote('GOSTEI')}>GOSTEI</button>
          </div>
          <div>
             <img src={Muitobom} alt="GOSTEI MUITO" />
            <button id='gosteimuito' onClick={() => handlevote('GOSTEI MUITO')}>GOSTEI MUITO</button>
          </div>
        </section>
        {error && <p style={{ color: 'red' }}>Por favor, selecione uma opção.</p>}
      </main>
    </div>
  );
};

export default Question6;
