// eslint-disable-next-line no-unused-vars
import React, {useRef, useContext, useState} from 'react';
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
import { feedbackContext } from '../Context/FeedbackContext';

const Question10 = () => {

  const navigate = useNavigate()
  const [artists, setArtists] = useState([]);
  const { feedbacks, setFeedbacks, error, setError } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleArtistClick = (artist) => {
    let _artists = Array.isArray(artists) ? artists : [];
    if (_artists.includes(artist)) {
      setError(true)
      _artists = _artists.filter(a => a !== artist);
      setArtists(_artists)
    } else if (_artists.length < 3){
      _artists.push(artist)
      setArtists(_artists)
    } else {
      setError(false)
    }
    console.log(_artists)
  }

  const handleNextQuestion = () => {
    if (artists === null) {
      setError(true);
    } else {
      navigate('/question5');
      _feedbacks.push(artists)
      setFeedbacks(_feedbacks)
      console.log(_feedbacks)
    }
  };

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
        <div className='selectedd' onClick={() => handleArtistClick("BellMarques")} >
          <img src={BellMarques} alt="BellMarques" />
          <h3>Bell Marques</h3>
        </div>
        <div onClick={() => handleArtistClick("CalcinhaPreta")}>
          <img src={Calcinhapreta} alt="CalcinhaPreta" />
          <h3>Calcinha Preta</h3>
        </div>
        <div onClick={() => handleArtistClick("Dennisdj")}>
          <img src={Dennisdj} alt="Dennisdj" />
          <h3>Dennis DJ</h3>
        </div>
        <div onClick={() => handleArtistClick("FelipeAmorim")}>
          <img src={FelipeAmorim} alt="FelipeAmorim" />
          <h3>Felipe Amorim</h3>
        </div>
        <div onClick={() => handleArtistClick("HenryFreitas")}>
          <img src={HenryFreitas} alt="HenryFreitas" />
          <h3>Henry Freitas</h3>
        </div>
        <div onClick={() => handleArtistClick("Jorge e matheus")}>
          <img src={Jorgeematheus} alt="Jorgeematheus" />
          <h3>Jorge e Mateus</h3>
        </div>
        <div onClick={() => handleArtistClick("Jonas Esticado")}>
          <img src={JonasEsticado} alt="JonasEsticado" />
          <h3>Jonas Esticado</h3>
        </div>
        <div onClick={() => handleArtistClick("Leo Santana")}>
          <img src={LeoSantana} alt="LeoSantana" />
          <h3>Leo Santana</h3>
        </div>
        <div onClick={() => handleArtistClick("Luan Estilizado")}>
          <img src={LuanEstilizado} alt="LuanEstilizado" />
          <h3>Luan Estilizado</h3>
        </div>
        <div onClick={() => handleArtistClick("Luan Santana")}>
          <img src={LuanSantana} alt="LuanSantana" />
          <h3>Luan Santana</h3>
        </div>
        <div onClick={() => handleArtistClick("MariFernandez")}>
          <img src={MariFernandez} alt="MariFernandez" />
          <h3>Mari Fernandez</h3>
        </div>
        <div onClick={() => handleArtistClick("Matheus e Kauan")}>
          <img src={MatheuseKauan} alt="MatheuseKaua" />
          <h3>Matheus e Kauan</h3>
        </div>
        <div onClick={() => handleArtistClick("Murilo Rulff")}>
          <img src={MuriloRulff} alt="MuriloRulff" />
          <h3>Murilo Rulff</h3>
        </div>
        <div onClick={() => handleArtistClick("Nattan")}>
          <img src={Nattan} alt="Nattan" />
          <h3>Nattan</h3>
        </div>
        <div onClick={() => handleArtistClick("Pedro Sampaio")}>
          <img src={PedroSampaio} alt="PedroSampaio" />
          <h3>Pedro Sampaio</h3>
        </div>
        <div onClick={() => handleArtistClick("Projeto Àvontade")}>
          <img src={ProjetoAvontade} alt="ProjetoAvontade" />
          <h3>Projeto Àvontade</h3>
        </div>
        <div onClick={() => handleArtistClick("Raí Saia Rodada")}>
          <img src={RaíSaiaRodada} alt="RaíSaiaRodada" />
          <h3>Raí Saia Rodada</h3>
        </div>
        <div onClick={() => handleArtistClick("Simone Mendes")}>
          <img src={SimoneMendes} alt="SimoneMendes" />
          <h3>Simone Mendes</h3>
        </div>
        <div onClick={() => handleArtistClick("Vintage culture")}>
          <img src={Vintageculture} alt="Vintage culture" />
          <h3>Vintage Culture</h3>
        </div>
        <div onClick={() => handleArtistClick("Wesley Safadão")}>
          <img src={WS} alt="WS" />
          <h3>Wesley Safadão</h3>
        </div>
        <div onClick={() => handleArtistClick("Xand Avião")}>
          <img src={XandAvião} alt="XandAvião" />
          <h3>Xand Avião</h3>
        </div>
        <div onClick={() => handleArtistClick("Ze Vaqueiro")}>
          <img src={ZeVaqueiro} alt="ZeVaqueiro" />
          <h3>Zé Vaqueiro</h3>
        </div>
        {error && <p>é necessário escolher pelomenos 3 artistas</p>}
        </Slider>
          <h2 id='roleatela'>*ROLE A TELA PARA ESCOLHER*</h2>
      <div className='container_button'>
        <button id='button_question10' onClick={handleNextQuestion}>Próxima pergunta</button>
      </div>
    </div>
  );
};

export default Question10;