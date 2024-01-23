// eslint-disable-next-line no-unused-vars
import React from 'react'
import '.input.css'

// eslint-disable-next-line react/prop-types
const Input = ({text,placeholder}) => {
  return (
    <div>
      <input type={text} placeholder={placeholder} />
    </div>
  )
}

export default Input
