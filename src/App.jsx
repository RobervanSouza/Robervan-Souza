import React from 'react';
import {  Sobre, Header,Experiencias, Projeto,  Footer } from './container';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app' >
    <Navbar/>
    <Header/>
    <Sobre/>
    <Experiencias/>
    <Projeto/>
    
    <Footer/>
    </div>
  )
}
export default App;