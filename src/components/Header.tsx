import React, { FC } from 'react'
import Logo from '../assets/logo.png'
import './Header.css'

const Header: FC = () => {
  return (
    <div className="Header">
        <img src={Logo}/>
    </div>
  )
}

export default Header