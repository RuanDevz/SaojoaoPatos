// eslint-disable-next-line no-unused-vars
import React, {useRef} from 'react';
import './Estilos/Question10.css';
import BellMarques from '../assets/Artistas/BellMarques.png'
import Calcinhapreta from '../assets/Artistas/Calcinhapreta.png'
import Dennisdj from '../assets/Artistas/Dennisdj.png'
import FelipeAmorim from '../assets/Artistas/FelipeAmorim.png'
import HenryFreitas from '../assets/Artistas/HenryFreitas.png'
import Jorgeematheus from '../assets/Artistas/Jorgeematheus.png'
import JonasEsticado from '../assets/Artistas/JonasEsticado.png'
import LeoSantana from '../assets/Artistas/LeoSantana.png'
import LuanSantana from '../assets/Artistas/LuanSantana.png'
import LuanEstilizado from '../assets/Artistas/LuanEstilizado.png'
import MariFernandez from '../assets/Artistas/MariFernandez.png'
import MatheuseKauan from '../assets/Artistas/MatheuseKauan.png'
import MuriloRulff from '../assets/Artistas/MuriloRulff.png'
import Nattan from '../assets/Artistas/Nattan.png'
import PedroSampaio from '../assets/Artistas/PedroSampaio.png'
import ProjetoAvontade from '../assets/Artistas/ProjetoAvontade.png'
import RaíSaiaRodada from '../assets/Artistas/RaíSaiaRodada.png'
import SimoneMendes from '../assets/Artistas/SimoneMendes.png'
import Vintageculture from '../assets/Artistas/Vintageculture.png'
import WS from '../assets/Artistas/WS.png'
import XandAvião from '../assets/Artistas/XandAvião.png'
import ZeVaqueiro from '../assets/Artistas/ZeVaqueiro.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
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
      },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
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
          <h3>Calcinha Preta</h3>
        </div>
        <div>
          <img src={Dennisdj} alt="Dennisdj" />
          <h3>Dennis DJ</h3>
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
          <h3>Jorge e Mateus</h3>
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
          <h3>Matheus e Kauan</h3>
        </div>
        <div>
          <img src={MuriloRulff} alt="MuriloRulff" />
          <h3>Murilo</h3>
        </div>
        <div>
          <img src={Nattan} alt="Nattan" />
          <h3>Nattan</h3>
        </div>
        <div>
          <img src={PedroSampaio} alt="PedroSampaio" />
          <h3>Pedro Sampaio</h3>
        </div>
        <div>
          <img src={ProjetoAvontade} alt="ProjetoAvontade" />
          <h3>Projeto Àvontade</h3>
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
          <h3>Vintage Culture</h3>
        </div>
        <div>
          <img src={WS} alt="WS" />
          <h3>Wesley Safadão</h3>
        </div>
        <div>
          <img src={XandAvião} alt="XandAvião" />
          <h3>Xand Avião</h3>
        </div>
        <div>
          <img src={ZeVaqueiro} alt="ZeVaqueiro" />
          <h3>Zé Vaqueiro</h3>
        </div>
        </Slider>
          <h2 id='roleatela'>*ROLE A TELA PARA ESCOLHER*</h2>
      <div className='container_button'>
        <button id='button_question10' onClick={() => navigate('/Questionsoptional')}>Próxima pergunta</button>
      </div>
    </div>
  );
};

export default Question10;
