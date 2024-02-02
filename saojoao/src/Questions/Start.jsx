// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Questions/Estilos/Start.css'
import Logo from '../assets/Logo/Logo.png'
import { useNavigate } from 'react-router-dom'

const Start = () => {

    const navigate = useNavigate()

  return (
     <div className='cont-logo'>
      <img id='logo_start' className='logo' src={Logo} alt="Logo" />
      <div>
        <p className='paragrafo-start'>O São João 2023 sem dúvidas foi um sucesso! Mas como sempre queremos deixar tudo cada vez melhor, precisamos saber achou na nossa da nossa festa, então bora contar o que você Pesquisa de Satisfação? </p>
        <p className='paragrafo-start'>Queremos saber tudo: o que curtiu, o que não curtiu, e como podemos fazer o São João da gente ficar ainda mais a nossa cara nas próximas edições. </p>
        <p  id='p_center'>Contamos com seu feedback, Vamos lá?!</p>
      </div>
      <div className='container_button'>
        <button id='start_button' onClick={() => navigate('/Question1')}>INICIAR</button>
      </div>
    </div>
  )
}

export default Start
