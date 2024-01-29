// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Pessimo from '../assets/bonecos/Pessimo.png';
import Ruim from '../assets/bonecos/Ruim.png';
import Indiferente from '../assets/bonecos/Indiferente.png';
import Bom from '../assets/bonecos/Bom.png';
import Muitobom from '../assets/bonecos/Muitobom.png';
import './Estilos/Question3.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png'


const Question3 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    if (selectedCard === index) {
      // Se o mesmo card foi clicado novamente, desselecione
      setSelectedCard(null);
    } else {
      // Senão, selecione o novo card
      setSelectedCard(index);
    }
  };

  return (
    <div>
      <h1>Sobre a estrutura do evento, você gostou?</h1>
      <div className='container-bonecos'>
        {[Muitobom, Bom, Indiferente, Ruim, Pessimo].map((src, index) => (
          <div
            key={index}
            className={`card ${selectedCard === index ? 'selected' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={src} alt={`Opção ${index + 1}`} />
            <p id={index === 0 ? 'otima' : index === 1 ? 'gosteimuito' : index === 2 ? 'indiferente' : index === 3 ? 'ruim' : 'naogostei'}
               className={selectedCard === index ? 'selected-text' : ''}
            >
            </p>
          </div>
        ))}
      </div>
      <div className='container_button'>
        <button onClick={() => navigate("/question4")}>Próxima Pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question3;
