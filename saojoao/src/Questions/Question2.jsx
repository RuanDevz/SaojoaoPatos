import React, { useContext, useState } from 'react';
import './Estilos/Question2.css';
import { useNavigate } from 'react-router-dom';
import { feedbackContext } from '../Context/FeedbackContext';
import Button from '../Components/Form/Button/ButtonProximapagina'
import ButtonProximapagina from '../Components/Form/Button/ButtonProximapagina';
import logo from '../assets/Logo São João/Logosaojoao.png'

const Question2 = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate(); 
  const [avaliacao, setAvaliacao] = useState(null);

  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleAvaliacaoClick = (valorAvaliacao) => {
    setAvaliacao(valorAvaliacao);
    setError(false); 
  };

  const handleNextQuestion = () => {
    if (!avaliacao) {
      setError(true); 
    } else {
      _feedbacks.push(avaliacao)
      setFeedbacks(_feedbacks)
      console.log(feedbacks)
      navigate('/question1');
    }
  };

  return (
    <div>
      <main className='container_geral_question2'>
        <section className='container_logo_question2'>
          <img src={logo} alt="logo" />
        </section>
        <section className='first-section-question2'>
          <p id='paragrafo-question2'>QUAL SUA <br /> <span id='orange'>FAIXA</span>  <span id='pink'>ETÁRIA ?</span></p>
        </section>
        <section className='container_section2_question2'>
          <label htmlFor="abaixode20">
            <input type="checkbox" name="faixaEtaria" id="abaixode20" value="abaixode20" onChange={() => handleAvaliacaoClick("abaixode20")} checked={avaliacao === "abaixode20"} />
            <strong>Abaixo de 20 anos</strong>
          </label>
          <label htmlFor="entre20e29">
            <input type="checkbox" name="faixaEtaria" id="entre20e29" value="entre20e29" onChange={() => handleAvaliacaoClick("entre20e29")} checked={avaliacao === "entre20e29"} />
            <strong>Entre 20 e 29 anos</strong>
          </label>
          <label htmlFor="entre30e39">
            <input type="checkbox" name="faixaEtaria" id="entre30e39" value="entre30e39" onChange={() => handleAvaliacaoClick("entre30e39")} checked={avaliacao === "entre30e39"} />
            <strong>Entre 30 a 39 anos</strong>
          </label>
          <label htmlFor="entre40e49">
            <input type="checkbox" name="faixaEtaria" id="entre40e49" value="entre40e49" onChange={() => handleAvaliacaoClick("entre40e49")} checked={avaliacao === "entre40e49"} />
            <strong>Entre 40 a 49 anos</strong>
          </label>
          <label htmlFor="entre50e59">
            <input type="checkbox" name="faixaEtaria" id="entre50e59" value="entre50e59" onChange={() => handleAvaliacaoClick("entre50e59")} checked={avaliacao === "entre50e59"} />
            <strong>Entre 50 e 59 anos</strong>
          </label>
          <div className='lastdiv'>
            <label htmlFor="acimade60">
              <input type="checkbox" name="faixaEtaria" id="acimade60" value="acimade60" onChange={() => handleAvaliacaoClick("acimade60")} checked={avaliacao === "acimade60"} />
               <strong id='six'>Acima de 60 anos</strong>
               <ButtonProximapagina id='question2' onClick={handleNextQuestion} Children='PRÓXIMA PERGUNTA >>>' />
            </label>
          </div>
        </section>
      </main>
      <div className='container_button_question2'>
        <button onClick={() => navigate('/Question3')}>PROXIMA PERGUNTA >>></button>
      </div>
      <div className='container_button_question2'>
      {error && <p id='error_msg' style={{ color: 'red' }}>Por favor, selecione uma faixa etária.</p>}
      </div>
    </div>
  );
};

export default Question2;
