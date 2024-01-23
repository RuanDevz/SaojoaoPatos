// eslint-disable-next-line no-unused-vars
import React from 'react'
import Amarelo from '../assets/quadrado/amarelo.png'
import laranja from '../assets/quadrado/laranja.png'
import verdeclaro from '../assets/quadrado/verdeclaro.png'
import verdeescuro from '../assets/quadrado/verdeescuro.png'
import vermelho from '../assets/quadrado/vermelho.png'

const Question1 = () => {
  return (
    <div className='container_question'>
      <h1>Sobre sua expectativa em relação ao São João</h1>
      <div className='quadrados'>
        <img id='quadrado' src={Amarelo} alt="Amarelo" />
        <img id='quadrado' src={laranja} alt="laranja" />
        <img id='quadrado' src={verdeclaro} alt="" />
        <img id='quadrado' src={verdeescuro} alt="" />
        <img id='quadrado' src={vermelho} alt="" />
      </div>
    </div>
  )
}

export default Question1
