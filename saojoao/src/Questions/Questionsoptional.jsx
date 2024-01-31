// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Estilos/Questionoptional.css'
import logo from '../assets/Logo/Logo.png'
import {useNavigate} from 'react-router-dom'

const Questionsoptional = () => {

  const navigate = useNavigate()
  return (
    <div>
        <div>
           <h1>Qual seu nome ?</h1>
           <div className='container_inputs'>
            <label htmlFor="name">
                <input id='name' type="text" placeholder=' Seu nome (opcional)' />
            </label>
           </div>
           <div>
            <h1>Qual seu e-mail ?</h1>
            <div className='container_inputs'>
              <label htmlFor="email">
                  <input type="email" name="email" id="email" placeholder=' Seu email (Opcional)' />
              </label>
            </div>
           </div>
           <button onClick={() => navigate('/Finish')} id='optional_button'>Finalizar</button>
        </div>
        <div className='logosaojoao'>
        <img id='optional_logo' src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Questionsoptional