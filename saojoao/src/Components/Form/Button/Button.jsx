// eslint-disable-next-line no-unused-vars
import React, { Children } from 'react'
import './button.css'

// eslint-disable-next-line react/prop-types
const Button = ({Children}) => {
  return (
    <div>
      <button>{Children}</button>
    </div>
  )
}

export default Button
