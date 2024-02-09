import React, { useState, useContext } from 'react';
import './Estilos/Question7.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png'
import Pessimo from '../assets/Rostinhos/1.png'
import Ruim from '../assets/Rostinhos/2.png'
import Indiferente from '../assets/Rostinhos/3.png'
import Bom from '../assets/Rostinhos/4.png'
import Muitobom from '../assets/Rostinhos/5.png'
import { FaStar } from "react-icons/fa";


const FaixaEtariaQuestion = () => {
  const navigate = useNavigate();
  const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState({
    'ATRAÇÕES': false,
    'ESTRUTURAS': false,
    'ATIVAÇÕES': false,
    'BARES': false,
    'ORGANIZAÇÃO': false,
    'LIMPEZA': false,
    'SEGURANÇA': false,
    'outros': false,
    'outrosText': '',
  });
  const [error, setError] = useState(false);

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleFaixaEtariaChange = (event) => {
    const { id, checked } = event.target;
    const updatedSelection = { ...selectedFaixaEtaria, [id]: checked };

    if (checked) {
      for (const key in updatedSelection) {
        if (key !== id && key !== 'outrosText') {
          updatedSelection[key] = false;
        }
      }
    }
   
    setSelectedFaixaEtaria(updatedSelection);
  };

  const handleOutrosTextChange = (event) => {
    setSelectedFaixaEtaria((prevSelected) => ({
      ...prevSelected,
      'outrosText': event.target.value,
    }));
  };

  const handleNextQuestion = () => {
    const { ATRAÇÕES, ESTRUTURAS, ATIVAÇÕES, BARES, ORGANIZAÇÃO, LIMPEZA, SEGURANÇA, outros, outrosText } = selectedFaixaEtaria;
    
    if (!(ATRAÇÕES || ESTRUTURAS || ATIVAÇÕES || BARES || ORGANIZAÇÃO || LIMPEZA || SEGURANÇA || outros)) {
      setError(true);
    } else {
      setError(false);
      const selectedItems = [];
  
      if (ATRAÇÕES) selectedItems.push('ATRAÇÕES');
      if (ESTRUTURAS) selectedItems.push('ESTRUTURAS');
      if (ATIVAÇÕES) selectedItems.push('ATIVAÇÕES');
      if (BARES) selectedItems.push('BARES');
      if (ORGANIZAÇÃO) selectedItems.push('ORGANIZAÇÃO');
      if (LIMPEZA) selectedItems.push('LIMPEZA');
      if (SEGURANÇA) selectedItems.push('SEGURANÇA');
      if (outros) selectedItems.push(outrosText);
  
      
      _feedbacks.push(selectedItems);
      setFeedbacks(_feedbacks);
  
      
      navigate('/question8');
    }
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
          <div onClick={() => navigate('/question8')} id='carinhas' className='pessimo'>
            <div className='check-box-star'>
              <img src={Pessimo} alt="Pessimo" />
              <FaStar id='star' />
            </div>
          </div>
          <div onClick={() => navigate('/question8')} id='carinhas' className='ruim'>
            <div className='check-box-star'>
              <img src={Ruim} alt="Ruim" />
              <FaStar id='star' />
              <FaStar id='star' />
            </div>
          </div>
          <div onClick={() => navigate('/question8')} id='carinhas' className='indiferente'>
            <div className='check-box-star'>
              <img src={Indiferente} alt="Indiferente" />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
            </div>
          </div>
          <div onClick={() => navigate('/question8')} id='carinhas' className='bom'>
            <div className='check-box-star'>
              <img src={Bom} alt="Bom" />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
            </div>
          </div>
          <div onClick={() => navigate('/question8')} id='carinhas' className='muitobom'>
            <div className='check-box-star'>
              <img src={Muitobom} alt="Muitobom" />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
              <FaStar id='star' />
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default FaixaEtariaQuestion;