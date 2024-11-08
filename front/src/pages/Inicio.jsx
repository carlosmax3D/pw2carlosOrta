import logo from '../logo.svg';
import '../App.css';
import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

function Inicio() {
  return (
    <div className="App">
      <Menu/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to='test'>Redireccioname a pagina Test</Link>
      </header>
    </div>
  );
}

export default Inicio;
