// eslint-disable-next-line no-unused-vars
import React, {useRef, useContext, useState} from 'react';
import './Estilos/Question10.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png'

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

  
  return (
    <div>
      <header className='container_logo_question9'>
        <img src={logo} alt="alta" />
      </header>
      <main className='container_geral_question9'>
        <section className='container_section_question9'>
          <p><span id='orange'>QUEM </span><span id='blue'>NÃO PODE <br /></span><span id='pink'>FALTAR</span> NO SÃO JOÃO <br /> DA GENTE ?</p>
        </section>
        <section>
          <div className='selected-cantores'>
              <button>9</button>
              <p>PROJETO À VONTADE</p>
          </div>
          <div className='selected-cantores'>
              <button>10</button>
              <p>MURILO HULFF</p>
          </div>
          <div className='selected-cantores'>
              <button>11</button>
              <p>MATHEUS E KAUAN</p>
          </div>
          <div className='selected-cantores'>
              <button>12</button>
              <p>SIMONE MENDES</p>
          </div>
          <div className='selected-cantores'>
              <button>13</button>
              <p>LUAN SANTANA</p>
          </div>
          <div className='selected-cantores'>
              <button>14</button>
              <p>GUSTAVO LIMA</p>
          </div>
          <div className='selected-cantores'>
              <button>15</button>
              <p>XAND AVIÃO</p>
          </div>
          <div className='selected-cantores'>
              <button>16</button>
              <p>HENRY FREITAS</p>
          </div>
        </section>
      </main> 
    </div>
  );
}

export default Question10;