import React, { useState, useContext } from 'react';
import '../Questions/Estilos/Start.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo São João/Logosaojoao.png';
import { feedbackContext } from '../Context/FeedbackContext';
import axios from 'axios';

const Start = () => {
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { feedbacks, setFeedbacks } = useContext(feedbackContext);
  let _feedbacks = Array.isArray(feedbacks) ? feedbacks : [];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateNumber(number)) {
      setError("Número inválido");
    } else {
<<<<<<< HEAD
      axios.post('http://localhost:3000/tel', {
        Telefone: number
      })
        .then((response) => {
          if (response.data.error) {
            console.log(response.data.error);
            setError(response.data.error);
          } else {
            const currentDate = new Date();
            const day = String(currentDate.getDate()).padStart(2, '0');
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const year = currentDate.getFullYear();
            const formattedDate = `${day}/${month}/${year}`;
            const hours = String(currentDate.getHours()).padStart(2, '0');
            const minutes = String(currentDate.getMinutes()).padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;
            const dateTimeString = `${formattedDate} ${formattedTime}`;
            const numberString = `${number}`;

            _feedbacks.unshift(numberString);
            _feedbacks.unshift(dateTimeString);
            setFeedbacks(_feedbacks);
            console.log(_feedbacks);
            navigate('/question2');
          }
        })
        .catch((error) => {
          console.error('Erro ao enviar o número:', error);
          setError('Erro ao enviar o número, por favor, tente novamente.');
        });
    }
  };
=======
      axios.post('http://localhost:3000/tel', { number })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Erro na requisição:', error);
          setError('Ocorreu um erro ao enviar a requisição.');
        });

      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      const dateTimeString = `${formattedDate} ${formattedTime}`;
      const numberString = `${number}`;

      _feedbacks.unshift(numberString);
      _feedbacks.unshift(dateTimeString);
      setFeedbacks(_feedbacks);
      console.log(_feedbacks);
      navigate('/question2');
    }
  }
>>>>>>> 511449b086b9aab13ad1ad8e91e610c0b29a0e36

  const validateNumber = (number) => {
    const re = /^\(\d{2}\) \d{5}-\d{4}$/;
    return re.test(String(number));
  };

  const handleChange = (e) => {
    let inputNumber = e.target.value;
    inputNumber = inputNumber.slice(0, 15);
    const formattedNumber = formatNumber(inputNumber);
    setNumber(formattedNumber);
  };

  const formatNumber = (number) => {
    const cleaned = ('' + number).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return number;
  };

  return (
    <div className='divgeral'>
      <header className='container_logo'>
        <img src={logo} alt="Logo" />
      </header>
      <main className='container_geral'>
        <section className='start-first-section'>
          <p>O São João sem dúvidas foi um sucesso! Mas como sempre queremos deixar tudo cada vez melhor. Por isso, precisamos saber o que você achou da nossa festa. Então bora contar tudo na pesquisa de satisfação?</p>
          <p><span id='ocean'>Queremos saber:</span> O que curtiu, o que não curtiu e como podemos fazer o São João da gente ficar ainda mais nossa cara nas próximas edições.</p>
          <p className='paragrafo-styled'><span id='orange'>Contamos </span><span>com </span><span id='pink'>seu <br /> Feedback </span><span>vamos lá? </span></p>
        </section>
      </main>
      <section className='start-segund-section'>
        <form onSubmit={handleSubmit} className='container_input'>
          <input type="tel" placeholder='Digite seu telefone...' value={number} onChange={handleChange} />
          <button type="submit"><p className='name_button'>INICIAR</p></button>
        </form>
      </section>
      <div className='container_message_error'>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Start;
