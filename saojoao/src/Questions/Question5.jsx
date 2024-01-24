// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Input from '../Components/Form/Input/Input'
import Button from '../Components/Form/Button/Button'

const Question5 = () => {

  const [input, setInput] = useState('')
  return (
    <div>
      <h1>Quais os pontos mais positivos do evento?</h1>
      <div>
        <Input type='text' placeholder='Escreva aqui' onchange={(e) => setInput(e.target.value)} />
      </div>
      <div className='container_button'>
        <Button Children='Próxima pergunta'/>
      </div>
    </div>
  )
}

export default Question5
