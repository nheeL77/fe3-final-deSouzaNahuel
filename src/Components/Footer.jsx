import React from 'react'
import { useContextGlobal } from './utils/global.context'

import logo from '../images/DH.png'
import facebook from '../images/ico-facebook.png'
import instagram from '../images/ico-instagram.png'
import tiktok from '../images/ico-tiktok.png'
import whatsapp from '../images/ico-whatsapp.png'

const Footer = () => {
  const {themeState} = useContextGlobal();

  return (
    
    <footer className={themeState.theme} style={{background: 'red'}}>
      <p>Powered by</p>
      <img src={logo} alt='DH-logo' />
      <img src={facebook} alt='ico-facebook'/>
      <img src={instagram} alt='ico-instagram'/>
      <img src={tiktok} alt='ico-tiktok'/>
      <img src={whatsapp} alt='ico-whatsapp'/>
    </footer>
  )
}

export default Footer
