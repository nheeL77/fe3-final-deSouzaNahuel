import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {themeState, themeDispatch} = useContextGlobal();
  console.log(themeState)

  const handleThemeChange = () => {
    if(themeState.theme === 'dark'){
      return themeDispatch({type: 'SWITCH_LIGHT'})
    } else{
      return themeDispatch({type: 'SWITCH_DARK'})
    }
  };

  return (
    <nav className={themeState.theme} >
      <h1>DH ODONTO</h1>
      <div>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to='/'>Home</Link> 
        <Link to='/contacts'>Contact</Link> 
        <Link to='/favs'>Favs</Link> 
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button style={{background:'none', border:'none'}} onClick={handleThemeChange}>  
          {themeState.theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar