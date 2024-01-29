// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Estilos/Questionoptional.css'
import logo from '../assets/Logo/Logo.png'
import { useNavigate } from 'react-router-dom'

const Questionsoptional = () => {

  const navigate = useNavigate()
  return (
    <div>
        <div>
           <h1 className='title-question'>Qual seu nome ?</h1>
           <div>
            <label htmlFor="name">
                <input id='name' type="text" placeholder=' Seu nome (opcional)' />
            </label>
           </div>
           <div>
            <h1 className='title-question'>Qual seu e-mail ?</h1>
            <label htmlFor="email">
                <input type="email" name="email" id="email" placeholder=' Seu email (Opcional)' />
            </label>
           </div>
           <button id='button_questions' onClick={() => navigate('/')}>Finalizar</button>
        </div>
        <div className='logosaojoao'>
        <img id='logo_questions' src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Questionsoptional
