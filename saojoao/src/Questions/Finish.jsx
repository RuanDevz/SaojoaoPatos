import React, { useEffect } from 'react';
import { IoMdHappy } from 'react-icons/io';
import logo from '../assets/Logo/Logo.png';
import './Estilos/Finish.css';
import { useNavigate } from 'react-router-dom';

const Finish = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className='container_finish'>
      <div className='container_logo_finish'>
        <img id='logo_finish' src={logo} alt='Logo' />
      </div>
      <div className='container_p_finish'>
        <h1 className='title_finish'>
          Agradecemos por dedicar seu tempo para compartilhar suas opiniões na nossa Pesquisa de Satisfação do São João 2023.
        </h1>
        <p className='last-manssage'>Te esperamos no São João 2024, até breve!</p>
        <div className='container_face'>
          <IoMdHappy className='happyface' />
        </div>
      </div>
    </div>
  );
};

export default Finish;
