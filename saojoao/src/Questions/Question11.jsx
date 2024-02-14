import React, { useState, useContext } from 'react';
import './Estilos/Question11.css';
import { feedbackContext } from '../Context/FeedbackContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo São João/Logosaojoao.png';

const Question11 = () => {
  const navigate = useNavigate();
  const [selectedCantor, setSelectedCantor] = useState(null);
  const { feedbacks, setFeedbacks, setError } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleCantorClick = (cantor) => {
    setSelectedCantor(cantor);
    handleNextQuestion(cantor);
  };

  const handleNextQuestion = (cantor) => {
    if (cantor === "") {
      setError(true);
    } else {
      _feedbacks.push(cantor);
      setFeedbacks(_feedbacks);
      console.log(_feedbacks);
      navigate('/question12');
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
            <button onClick={() => handleCantorClick("ERIC LAND")}>17</button>
            <p>ERIC LAND</p>
          </div>
          <div className='selected-cantores'>
            <button onClick={() => handleCantorClick("FELIPE AMORIM")}>18</button>
            <p>FELIPE AMORIM</p>
          </div>
          <div className='selected-cantores'>
            <button onClick={() => handleCantorClick("WESLEY SAFADÃO")}>19</button>
            <p>WESLEY SAFADÃO</p>
          </div>
          <div className='selected-cantores'>
            <button onClick={() => handleCantorClick("ZÉ VAQUEIRO")}>20</button>
            <p>ZÉ VAQUEIRO</p>
          </div>
          <div className='selected-cantores'>
            <button onClick={() => handleCantorClick("MAIARA E MARAISA")}>21</button>
            <p>MAIARA E MARAISA</p>
          </div>
          <div className='selected-cantores'>
            <button onClick={() => handleCantorClick("BELL MARQUES")}>22</button>
            <p>BELL MARQUES</p>
          </div>
          <div className='selected-cantores'>
            <button onClick={() => handleCantorClick("PEDRO SAMPAIO")}>23</button>
            <p>PEDRO SAMPAIO</p>
          </div>
          <div className='selected-cantores'>
            <button onClick={() => handleCantorClick("LEO SANTANA")}>24</button>
            <p>LEO SANTANA</p>
          </div>
          <div className='selected-cantores'>
            <button onClick={() => handleCantorClick("DENIS DJ")}>25</button>
            <p>DENIS DJ</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Question11;
