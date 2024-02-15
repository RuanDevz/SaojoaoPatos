import React, { useState, useContext } from 'react';
import '../Questions/Estilos/Question5.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png';

const Question5 = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedOption(name);
    } else {
      setSelectedOption('');
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption === '') {
      setError(true);
    } else {
      setError(false);
      _feedbacks.push(selectedOption);
      setFeedbacks(_feedbacks);
      console.log(_feedbacks);
      navigate('/question6');
    }
  };

  return (
    <div>
      <header className='container_header_question4'>
        <img src={logo} alt="logo" />
      </header>
      <main className='container_geral_question5_main'>
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
                checked={selectedOption === "Atracoes"}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox2">Atrações</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Estruturas"
                id="checkbox3"
                checked={selectedOption === "Estruturas"}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox3">Estruturas</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Ativacoes"
                id="checkbox4"
                checked={selectedOption === "Ativacoes"}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox4">Ativações</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Bares"
                id="checkbox5"
                checked={selectedOption === "Bares"}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox5">Bares</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Organizacao"
                id="checkbox6"
                checked={selectedOption === "Organizacao"}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox6">Organização</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Limpeza"
                id="checkbox7"
                checked={selectedOption === "Limpeza"}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox7">Limpeza</label>
            </div>
            <div className='checkbox-item'>
              <input
                type="checkbox"
                name="Seguranca"
                id="checkbox8"
                checked={selectedOption === "Seguranca"}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox8">Segurança</label>
            </div>
          </section>
        </div>
      </main>
      <div className='container_button_question4'>
        <button id='proximapergunta' onClick={handleNextQuestion}>PRÓXIMA PERGUNTA</button>
      </div>
      {error && <p id='error_msg' style={{ color: 'red' }}>Por favor, selecione uma opção.</p>}
    </div>
  );
};

export default Question5;
