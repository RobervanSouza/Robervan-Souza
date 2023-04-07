import React from "react";
import { Sobre, Experiencias, Projeto, Contato } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Home from "./container/home/Home";

const App = () => {
  
  return (
    <div className="app">
      <div className="app-navbar">
        <Navbar />
      </div>

      <div className="app-home v1">
        <Home />
      </div>

      <div className="app-sobre">
        <Sobre />
      </div>

      <div className="app-experiencia">
        <Experiencias />
      </div>

      <div className="app-projeto">
    
        <Projeto />
      </div>

      <div className="app-contato">
        <Contato />
      </div>
    </div>
  );
};
export default App;
