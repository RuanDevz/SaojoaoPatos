// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import '../Questions/Estilos/Start.css'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo/logo.png'

const Start = () => {


  
    const navigate = useNavigate();

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
        <form action="" method='POST' className='container_input'>
          <input type="text" placeholder='Digite seu e-mail...' />
          <button onClick={() => navigate('/question1')}><p className='name_button'>INICIAR</p></button>
        </form>
        </section>
    </div>
  )
}

export default Start
