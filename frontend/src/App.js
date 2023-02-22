import React from 'react';
import {  Sobre, Header, Observacao, Projeto, Skill, Footer } from './container';
import { Navbar } from './components';
import './App.scss'
const App = () => {
  return (
    <div className='app' >
    <Navbar/>
    <Header/>
    <Sobre/>
    <Projeto/>
    <Skill/>
    <Observacao/>
    <Footer/>
    </div>
  )
}
export default App;