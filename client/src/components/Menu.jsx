import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <h1>Hola aun no soy un menu</h1>
        <Link to='/'>Redireccioname al inicio</Link>
        <Link to='/test'>Redireccioname al test</Link>
    </div>
  );
}

export default Menu;
