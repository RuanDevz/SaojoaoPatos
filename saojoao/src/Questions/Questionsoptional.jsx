// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Estilos/Questionoptional.css'
import logo from '../assets/Logo/Logo.png'

const Questionsoptional = () => {
  return (
    <div>
        <div>
           <h1>Qual seu nome ?</h1>
           <div>
            <label htmlFor="name">
                <input id='name' type="text" placeholder=' Seu nome (opcional)' />
            </label>
           </div>
           <div>
            <h1>Qual seu e-mail ?</h1>
            <label htmlFor="email">
                <input type="email" name="email" id="email" placeholder=' Seu email (Opcional)' />
            </label>
           </div>
           <button>Finalizar</button>
        </div>
        <div className='logosaojoao'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Questionsoptional
