// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Input/input.css'

// eslint-disable-next-line react/prop-types
const Input = ({text,placeholder,onchange,value}) => {
  return (
    <div>
      <input className='search-input' type={text} placeholder={placeholder} onChange={onchange} value={value} />
    </div>
  )
}

export default Input
