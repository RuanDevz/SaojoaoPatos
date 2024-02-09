import React, { useState, useContext } from 'react';
import '../Questions/Estilos/Question4.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import logo from '../assets/Logo São João/Logosaojoao.png'

const Question4 = () => {
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
      _feedbacks.push(selectedOption);
      setFeedbacks(_feedbacks);
      navigate('/question5');
    }
  };

  return (
    <div className='container_geral_question4_'>
      <header className='container_header_question4'>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <section className='container_section_question4'>
          <p><span id='orange'>O QUE </span>VOCÊ <br /> MAIS <span id='pink'>GOSTOU?</span></p>
        </section>
        <section className='container_section2_question4'>
          <div className='checkbox-item'>
            <input
              type="checkbox"
              name="Atracoes"
              id="checkbox2"
              onChange={handleCheckboxChange}
              checked={selectedOption === "Atracoes"}
            />
            <label htmlFor="checkbox2">Atrações</label>
          </div>
          <div className='checkbox-item'>
            <input
              type="checkbox"
              name="Estruturas"
              id="checkbox3"
              onChange={handleCheckboxChange}
              checked={selectedOption === "Estruturas"}
            />
            <label htmlFor="checkbox3">Estruturas</label>
          </div>
          <div className='checkbox-item'>
            <input
              type="checkbox"
              name="Ativacoes"
              id="checkbox4"
              onChange={handleCheckboxChange}
              checked={selectedOption === "Ativacoes"}
            />
            <label htmlFor="checkbox4">Ativações</label>
          </div>
          <div className='checkbox-item'>
            <input
              type="checkbox"
              name="Bares"
              id="checkbox5"
              onChange={handleCheckboxChange}
              checked={selectedOption === "Bares"}
            />
            <label htmlFor="checkbox5">Bares</label>
          </div>
          <div className='checkbox-item'>
            <input
              type="checkbox"
              name="Organizacao"
              id="checkbox6"
              onChange={handleCheckboxChange}
              checked={selectedOption === "Organizacao"}
            />
            <label htmlFor="checkbox6">Organização</label>
          </div>
          <div className='checkbox-item'>
            <input
              type="checkbox"
              name="Limpeza"
              id="checkbox7"
              onChange={handleCheckboxChange}
              checked={selectedOption === "Limpeza"}
            />
            <label htmlFor="checkbox7">Limpeza</label>
          </div>
          <div className='checkbox-item'>
            <input
              type="checkbox"
              name="Seguranca"
              id="checkbox8"
              onChange={handleCheckboxChange}
              checked={selectedOption === "Seguranca"}
            />
            <label htmlFor="checkbox8">Segurança</label>
          </div>
          {error && <p style={{ color: 'red' }}>Por favor, selecione apenas uma opção.</p>}
        </section>
      </main>
      <div className='container_button_question4'>
        <button onClick={handleNextQuestion}>PRÓXIMA PERGUNTA</button>
      </div>
    </div>
  );
};

export default Question4;
