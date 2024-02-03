// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import '../Questions/Estilos/Start.css'
import Logo from '../assets/Logo/Logo.png'
import { useNavigate } from 'react-router-dom'

const Start = () => {


  
    const navigate = useNavigate()

  return (
     <div className='cont-logo'>
      <img id='logo_start' className='logo' src={Logo} alt="Logo" />
      <div className='container_paragrafos'>
        <p className='paragrafo-start'>O SÃO JOÃO 2023 SEM DÚVIDAS FOI UM SUCESSO! MAS COMO SEMPRE QUEREMOS DEIXAR TUDO CADA VEZ MELHOR. POR ISSO, PRECISAMOS SABER O QUE VOCÊ ACHOU DA NOSSA FESTA. ENTÃO BORA CONTAR TUDO NA PESQUISA DE SATISFAÇÃO? </p>
        <p className='paragrafo-start'>QUEREMOS SABER: O QUE CURTIU, O QUE NÃO CURTIU, E COMO PODEMOS FAZER O SÃO JOÃO DA GENTE FICAR AINDA MAIS A NOSSA CARA NAS PRÓXIMAS EDIÇÕES. </p>
        <p  id='p_center'>CONTAMOS COM SEU FEEDBACK, VAMOS LÁ?</p>
      </div>
      <div className='container_button'>
        <button id='start_button' onClick={() => navigate('/Question1')}>INICIAR</button>
      </div>
    </div>
  )
}

export default Start
