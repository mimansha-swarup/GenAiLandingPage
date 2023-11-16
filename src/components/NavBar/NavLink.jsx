import React from 'react'

const NavLink = ({linkObj}) => {
  const currentPath = window.location.pathname
  return (
    <li className={currentPath===linkObj.path ? 'active': ''} >{linkObj.title}</li>
  )
}

export default NavLink