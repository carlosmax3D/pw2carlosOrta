import logo from './logo.svg';
import ComponentDidMount from './ComponentMount';
import ComponentUpdate from './ComponentUpdate';
import ComponentUmount from './ComponentUmount'
import ComponentCount from './ComponentCount'
import HookCount from './HookCount'
import ResponsiveAppBar from './components/Menu'
import './App.css';
import Options from './Opciones';

export default function App(prop) {
  console.dir(prop)
  return (
    <div className="App">
    <ResponsiveAppBar></ResponsiveAppBar>
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
          {!prop.sesion.isLogged && "Hola"}
          {prop.sesion.isLogged && "Bienvenido"}
        </a>
        <button onClick={()=>prop.sesion.changeLogin()}>{!prop.sesion.isLogged && "Iniciar sesion"}{prop.sesion.isLogged && "Cerrar sesion"}</button>
      </header>
      <Options></Options>
      <ComponentDidMount name="Gerardo" tipo="Alumno"></ComponentDidMount>
      <ComponentUpdate></ComponentUpdate>
      <ComponentUmount></ComponentUmount>
    </div>
//      <ComponentCount></ComponentCount>
//      <HookCount></HookCount>
//      <HookMount></HookMount>
  );
}
