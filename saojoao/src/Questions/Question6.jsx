// eslint-disable-next-line no-unused-vars
import React from 'react'

const Question6 = () => {
  return (
    <div>
      <h1>Qual sua faixa etária?</h1>
      <div>
        <input type="checkbox" id='abaixode20'/>
        <label htmlFor="abaixode20">Abaixo de 20 anos</label>
      </div>
      <div>
        <input type="checkbox" id='acimade20'/>
        <label htmlFor="acimade20">Entre 20 e 29 anos</label>
      </div>
      <div>
        <input type="checkbox" id='acimade30'/>
        <label htmlFor="acimade30">Entre 30 e 39 anos</label>
      </div>
      <div>
        <input type="checkbox" id='acimade40'/>
        <label htmlFor="acimade40">Entre 40 e 49 anos</label>
      </div>
      <div>
        <input type="checkbox" id='acimade50'/>
        <label htmlFor="acimade50">Entre 50 e 59 anos</label>
      </div>
      <div>
        <input type="checkbox" id='acimade60'/>
        <label htmlFor="acimade60">Acima de 60 anos</label>
      </div>
    </div>
  )
}

export default Question6
