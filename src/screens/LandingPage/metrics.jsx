import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";
const Metrics = () => {
  return (
    <div className='metric-cont' > 
      <h1>+20k</h1>
      <div  className='row'>
      <div >
        <p>Glass Pattern generated this</p>
        <p>week in the first release.</p>
      </div>
      <FaAnglesDown className='icon' />
      </div>
    </div>
  )
}

export default Metrics