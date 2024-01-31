// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoMdHappy } from "react-icons/io";
import logo from '../assets/Logo/Logo.png'
import './Estilos/Finish.css'


const Finish = () => {
  return (
    <div className='container_finish'>
      <h1 className='title_finish'>Obrigado pela sua Avaliação!</h1>
      <div className='container_face'>
      <IoMdHappy className='happyface' />
      </div>
      <div className='container_logo_finish'>
        <img id='logo_finish' src={logo} alt="Logo" />
      </div>
    </div>
  )
}

export default Finish
