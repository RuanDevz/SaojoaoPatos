// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Estilos/Question12.css'
import logo from '../assets/Logo São João/Logosaojoao.png'

const Question12 = () => {
  return (
    <div>
      <header className='container_logo_question12'>
        <img src={logo} alt="logo" />
      </header>
      <main className='container_main_question12'>
        <h1>QUAL SEU <br /> <span id='orange'>NOME?</span></h1>
        <div className='container_input_question12'>
          <input type="text" placeholder='Digite seu nome...' />
        </div>
      </main>
      <div className='container_button_question12'>
        <button>FINALIZAR</button>
      </div>
    </div>
  )
}

export default Question12
