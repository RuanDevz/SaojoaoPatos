// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoMdHappy } from "react-icons/io";
import logo from '../assets/Logo/Logo.png'
import './Estilos/Finish.css'


const Finish = () => {
  return (
    <div className='container_finish'>
      <div className='container_logo_finish'>
      <img id='logo_finish' src={logo} alt="Logo" />
      </div>
      <h1 className='title_finish'>Agradecemos por dedicar seu tempo para compartilhar suas opiniões na nossa Pesquisa de Satisfação do São João 2023. </h1>
      <p>Te esperamos no São João 2024, até breve!</p>
      <div className='container_face'>
      <IoMdHappy className='happyface' />
      </div>
    </div>
  )
}

export default Finish
