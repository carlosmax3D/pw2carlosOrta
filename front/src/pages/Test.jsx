import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

function Test() {
  return (
    <div>
        <Menu/>
        <h1>Hola esta es una prueba</h1>
        <Link to='/'>Redireccioname al inicio</Link>
    </div>
  );
}

export default Test;
