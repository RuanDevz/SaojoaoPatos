import React, { useState, useContext } from 'react';
import './Estilos/Question11.css';
import { feedbackContext } from '../Context/FeedbackContext';
import {useNavigate } from 'react-router-dom';
import logo from '../assets/Logo São João/Logosaojoao.png'

const Question11= () => {

  const navigate = useNavigate();
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
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
              <button onClick={() => navigate('/question12')}>17</button>
              <p>ERIC LAND</p>
          </div>
          <div className='selected-cantores'>
              <button onClick={() => navigate('/question12')}>18</button>
              <p>FELIPE AMORIM</p>
          </div>
          <div className='selected-cantores'>
              <button onClick={() => navigate('/question12')}>19</button>
              <p>WESLEY SAFADÃO</p>
          </div>
          <div className='selected-cantores'>
              <button onClick={() => navigate('/question12')}>20</button>
              <p>ZÉ VAQUEIRO</p>
          </div>
          <div className='selected-cantores'>
              <button onClick={() => navigate('/question12')}>21</button>
              <p>MAIARA E MARAISA</p>
          </div>
          <div className='selected-cantores'>
              <button onClick={() => navigate('/question12')}>22</button>
              <p>BELL MARQUES</p>
          </div>
          <div className='selected-cantores'>
              <button onClick={() => navigate('/question12')}>23</button>
              <p>PEDRO SAMPAIO</p>
          </div>
          <div className='selected-cantores'>
              <button onClick={() => navigate('/question12')}>24</button>
              <p>LEO SANTANA</p>
          </div>
          <div className='selected-cantores'>
              <button onClick={() => navigate('/question12')}>25</button>
              <p>DENIS DJ</p>
          </div>
        </section>
        </main>
    </div>
  );
};

export default Question11;
