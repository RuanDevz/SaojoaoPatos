// eslint-disable-next-line no-unused-vars
import React, {useRef} from 'react';
import './Estilos/Question10.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import logo from '../assets/Logo/Logo.png'
import { useNavigate } from 'react-router-dom';

const Question10 = () => {

  const navigate = useNavigate()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    touchMove: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };
  
  return (
    <div>
      <h1 className='title_question10'>Quem você chamaria para o São João 2024? (Escolha até 3 opções)</h1>
        <Slider className='container_images' {...settings}>
        <div>
          <img src={BellMarques} alt="BellMarques" />
          <h3>Bell Marques</h3>
        </div>
        <div>
          <img src={Calcinhapreta} alt="CalcinhaPreta" />
          <h3>Calcinha preta</h3>
        </div>
        <div>
          <img src={Dennisdj} alt="Dennisdj" />
          <h3>Dennisdj</h3>
        </div>
        <div>
          <img src={FelipeAmorim} alt="FelipeAmorim" />
          <h3>Felipe Amorim</h3>
        </div>
        <div>
          <img src={HenryFreitas} alt="HenryFreitas" />
          <h3>Henry Freitas</h3>
        </div>
        <div>
          <img src={Jorgeematheus} alt="Jorgeematheus" />
          <h3>Jorge e matheus</h3>
        </div>
        <div>
          <img src={JonasEsticado} alt="JonasEsticado" />
          <h3>Jonas Esticado</h3>
        </div>
        <div>
          <img src={LeoSantana} alt="LeoSantana" />
          <h3>Leo Santana</h3>
        </div>
        <div>
          <img src={LuanEstilizado} alt="LuanEstilizado" />
          <h3>Luan Estilizado</h3>
        </div>
        <div>
          <img src={LuanSantana} alt="LuanSantana" />
          <h3>Luan Santana</h3>
        </div>
        <div>
          <img src={MariFernandez} alt="MariFernandez" />
          <h3>Mari Fernandez</h3>
        </div>
        <div>
          <img src={MatheuseKauan} alt="MatheuseKaua" />
          <h3>Matheus e Kaua</h3>
        </div>
        <div>
          <img src={MuriloRulff} alt="MuriloRulff" />
          <h3>Murilo Rulff</h3>
        </div>
        <div>
          <img src={Nattan} alt="Nattan" />
          <h3>Nattana</h3>
        </div>
        <div>
          <img src={PedroSampaio} alt="PedroSampaio" />
          <h3>Pedro Sampaio</h3>
        </div>
        <div>
          <img src={ProjetoAvontade} alt="ProjetoAvontade" />
          <h3>Projeto Avontade</h3>
        </div>
        <div>
          <img src={RaíSaiaRodada} alt="RaíSaiaRodada" />
          <h3>Raí Saia Rodada</h3>
        </div>
        <div>
          <img src={SimoneMendes} alt="SimoneMendes" />
          <h3>Simone Mendes</h3>
        </div>
        <div>
          <img src={Vintageculture} alt="Vintageculture" />
          <h3>Vintageculture</h3>
        </div>
        <div>
          <img src={WS} alt="WS" />
          <h3>WS</h3>
        </div>
        <div>
          <img src={XandAvião} alt="XandAvião" />
          <h3>Xand Avião</h3>
        </div>
        <div>
          <img src={ZeVaqueiro} alt="ZeVaqueiro" />
          <h3>Ze Vaqueiro</h3>
        </div>
        </Slider>

      
      <div className='container_button'>
        <button id='button_question10' onClick={() => navigate('/Questionsoptional')}>Próxima pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img id='logo_question10' src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Question10;
