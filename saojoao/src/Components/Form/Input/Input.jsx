// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../Form/Input/Input.css';

// eslint-disable-next-line react/prop-types
const Input = ({ text, id, placeholder, onchange, defaultValue }) => {
  return (
    <div>
      <input
        className='search-input'
        id={id}
        type={text}
        placeholder={placeholder}
        onChange={onchange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
