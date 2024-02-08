// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Estilos/Question12.css'
import logo from '../assets/Logo São João/Logosaojoao.png'
import {useNavigate} from 'react-router-dom'

const Question12 = () => {
  const navigate = useNavigate()
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
        <div className='container_button_question12'>
          <button onClick={() => navigate('/finish')}>FINALIZAR</button>
        </div>
      </main>
    </div>
  )
}

export default Question12
