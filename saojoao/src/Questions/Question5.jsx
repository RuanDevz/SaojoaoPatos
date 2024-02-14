import React, { useState, useContext } from 'react';
import '../Questions/Estilos/Question5.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png';

const Question5 = () => {
  const [selectedOptions, setSelectedOptions] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedOptions((prevSelectedOptions) => {
        if (prevSelectedOptions === '') {
          return name;
        } else {
          return prevSelectedOptions + ',' + name;
        }
      });
    } else {
      setSelectedOptions((prevSelectedOptions) => {
        return prevSelectedOptions
          .split(',')
          .filter((option) => option !== name)
          .join(',');
      });
    }
  };

  const handleNextQuestion = () => {
    if (selectedOptions === '') {
      setError(true);
    } else {
      setError(false);
      _feedbacks.push(selectedOptions);
      setFeedbacks(_feedbacks);
      console.log(_feedbacks);
      navigate('/question6'); // Alterei a rota para a próxima pergunta
    }
  };

  return (
    <div>
      <header className='container_header_question4'>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <section className='container_section_question4'>
          <p><span id='orange'>O QUE </span>VOCÊ <br /> MENOS <span id='pink'>GOSTOU?</span></p>
        </section>
        <div className='container_geral_section2'>
          <section className='container_section2_question4'>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Atracoes"
                id="checkbox2"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox2">Atrações</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Estruturas"
                id="checkbox3"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox3">Estruturas</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Ativacoes"
                id="checkbox4"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox4">Ativações</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Bares"
                id="checkbox5"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox5">Bares</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Organizacao"
                id="checkbox6"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox6">Organização</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Limpeza"
                id="checkbox7"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox7">Limpeza</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Seguranca"
                id="checkbox8"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox8">Segurança</label>
            </div>
            {error && <p style={{ color: 'red' }}>Por favor, selecione pelo menos uma opção.</p>}
          </section>
        </div>
        <div className='container_button_question4'>
          <button onClick={handleNextQuestion}>PRÓXIMA PERGUNTA</button>
        </div>
      </main>
    </div>
  );
};

export default Question5;
