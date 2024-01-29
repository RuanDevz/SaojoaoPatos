// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Estilos/Question10.css';
import jorgeematheus from '../assets/Artistas/1.jpg';
import marifernandez from '../assets/Artistas/2.jpg';
import Luanestilizado from '../assets/Artistas/3.jpg';
import Alok from '../assets/Artistas/4.jpg';
import Rai from '../assets/Artistas/5.jpg';
import Wesley from '../assets/Artistas/6.jpg';
import Natan from '../assets/Artistas/7.jpg';
import GustavoLima from '../assets/Artistas/8.jpg';
import LuanSantana from '../assets/Artistas/9.jpg';
import Xand from '../assets/Artistas/10.jpg';
import Zevaqueiro from '../assets/Artistas/11.jpg';
import BellMarques from '../assets/Artistas/12.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../assets/Logo/Logo.png'
import { useNavigate } from 'react-router-dom';

const Question10 = () => {

  const navigate = useNavigate()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <h1>Quem você chamaria para o São João 2024?</h1>
      <div className='container_images'>
        <div>
          <img src={jorgeematheus} alt="Jorge e Matheus" />
          <h3>Jorge e Matheus</h3>
        </div>
        <div>
          <img src={marifernandez} alt="Marifernandes" />
          <h3>Marifernandes</h3>
        </div>
        <div>
          <img src={Luanestilizado} alt="Luan Estilizado" />
          <h3>Luan Estilizado</h3>
        </div>
        <div>
          <img src={Alok} alt="Alok" />
          <h3>Alok</h3>
        </div>
        <div>
          <img src={Rai} alt="Rai" />
          <h3>Rai Saia Rodada</h3>
        </div>
        <div>
          <img src={Wesley} alt="Wesley" />
          <h3>Wesley Safadão</h3>
        </div>
        <div>
          <img src={Natan} alt="Natan" />
          <h3>Natan</h3>
        </div>
        <div>
          <img src={GustavoLima} alt="Gustavo Lima" />
          <h3>Gustavo Lima</h3>
        </div>
        <div>
          <img src={LuanSantana} alt="Luan Santana" />
          <h3>Luan Santana</h3>
        </div>
        <div>
          <img src={Xand} alt="Xand Avião" />
          <h3>Xand Avião</h3>
        </div>
        <div>
          <img src={Zevaqueiro} alt="Zé Vaqueiro" />
          <h3>Zé Vaqueiro</h3>
        </div>
        <div>
          <img src={BellMarques} alt="Bell Marques" />
          <h3>Bell Marques</h3>
        </div>
      </div>
      <div className='container_button'>
        <button onClick={() => navigate('/Questionsoptional')}>Próxima pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question10;
