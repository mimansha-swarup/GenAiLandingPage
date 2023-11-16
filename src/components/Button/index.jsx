import React from 'react'
import './style.css'


const Button = ({children,type='', className='', ...buttonProps }) => {

  return (
    <button className={`btn ${type} ${className}`} {...buttonProps} >{children}</button>
  )
}

export default Button