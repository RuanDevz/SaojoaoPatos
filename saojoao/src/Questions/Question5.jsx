// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Input from '../Components/Form/Input/Input'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo/Logo.png'
import './Estilos/Question5.css'

const Question5 = () => {

  const [input, setInput] = useState('')
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='title-question5'>Quais os pontos mais positivos do evento?</h1>
      <div className='container_input_question5'>
        <Input type='text' placeholder='Escreva aqui' onchange={(e) => setInput(e.target.value)} />
      </div>
      <div className='container_button'>
        <button onClick={() => navigate('/question6')}>Próxima pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Question5
