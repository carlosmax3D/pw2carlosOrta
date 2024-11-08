import logo from './logo.svg';
import ComponentDidMount from './ComponentMount';
import ComponentUpdate from './ComponentUpdate';
import ComponentUmount from './ComponentUmount'
import ComponentCount from './ComponentCount'
import HookCount from './HookCount'
import HookMount from './HookMount'
import NotFound from './NotFound'
import EventCounter from './EventCounter';
import EventCounterID from './EventCounterID';
import CheckLogin from './CheckLogin';
import Form1 from './Form1';
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
import PageUsuarios from './PageUsuario'
import './App.css';
import Inicio from './Inicio'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
 const [isLoggedIn, setLoggedIn] = useState(false);
 const toggleLogin = {"changeLogin": () => {
   console.dir(isLoggedIn)
   setLoggedIn(!isLoggedIn);
 }, "isLogged": isLoggedIn};
 console.log(window.location.pathname);
  return (
    <Routes>
      <Route path="/" element={<Inicio sesion={toggleLogin}/>}/>
      <Route path="/test" element={<ComponentDidMount/>}/>
      <Route path="/test1" element={<ComponentUpdate/>}/>
      <Route path="/test2" element={<ComponentUmount/>}/>
      <Route path="/test3" element={<HookMount/>}/>
      <Route path="/counter" element={<EventCounter/>}/>
      <Route path="/counterID" element={<EventCounterID/>}/>
      <Route path="/checkLogin" element={<CheckLogin/>}/>
      <Route path="/form1" element={<Form1/>}/>
      <Route path="/form2" element={<Form2/>}/>
      <Route path="/form3" element={<Form3/>}/>
      <Route path="/form4" element={<Form4/>}/>
      <Route path="/usuarios" element={<PageUsuarios/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
