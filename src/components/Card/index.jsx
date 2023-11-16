import React from 'react'
import "./style.css"

const Card = ({className='',tagLabel, children}) => {
  return (
    <div className={`card ${className}`}>
      <div className="tag">{tagLabel}</div>
      {children}
    </div>
  )
}

export default Card