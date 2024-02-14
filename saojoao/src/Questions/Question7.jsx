import React, { useContext } from 'react';
import './Estilos/Question7.css';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png';
import Pessimo from '../assets/Rostinhos/1.png';
import Ruim from '../assets/Rostinhos/2.png';
import Indiferente from '../assets/Rostinhos/3.png';
import Bom from '../assets/Rostinhos/4.png';
import Muitobom from '../assets/Rostinhos/5.png';
import { FaStar } from "react-icons/fa";

const FaixaEtariaQuestion = () => {
  const navigate = useNavigate(); // Usando o hook useNavigate

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleRatingChange = (rating) => {
    _feedbacks.push(rating);
    setFeedbacks(_feedbacks);
    console.log(_feedbacks);
    navigate('/question8');
  };

  return (
    <div>
      <header className='container_logo_question7'>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <section className='container_section_question7'>
          <p><span id='pink'>QUAL </span> <span id='orange'>SEU NÍVEL <br /></span>DE SATISFAÇÃO <br /> <span id='pink'>COM AS</span><span id='ocean'> ATRAÇÕES ?</span></p>
        </section>
        <section className='container_section_question7'>
          <div onClick={() => handleRatingChange('Muitobom')} id='carinhas' className='muitobom'>
            <div className='check-box-star'>
              <img src={Muitobom} alt="Muitobom" />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
            </div>
          </div>
          <div onClick={() => handleRatingChange('Bom')} id='carinhas' className='bom'>
            <div className='check-box-star'>
              <img src={Bom} alt="Bom" />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
            </div>
          </div>
          <div onClick={() => handleRatingChange('Indiferente')} id='carinhas' className='indiferente'>
            <div className='check-box-star'>
              <img src={Indiferente} alt="Indiferente" />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
            </div>
          </div>
          <div onClick={() => handleRatingChange('Ruim')} id='carinhas' className='ruim'>
            <div className='check-box-star'>
              <img src={Ruim} alt="Ruim" />
              <FaStar id='star' />
              <FaStar id='star' />
            </div>
          </div>
          <div onClick={() => handleRatingChange('Péssimo')} id='carinhas' className='pessimo'>
            <div className='check-box-star'>
              <img src={Pessimo} alt="Péssimo" />
              <FaStar id='star' />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FaixaEtariaQuestion;
