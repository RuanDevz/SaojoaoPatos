// eslint-disable-next-line no-unused-vars
import React, { Children } from 'react'
import './ButtonStyle.css'

// eslint-disable-next-line react/prop-types
const ButtonProximapagina = ({Children,onClick, id}) => {
  return (
    <div>
      <button id={id} onClick={onClick}>{Children}</button>
    </div>
  )
}

export default ButtonProximapagina
