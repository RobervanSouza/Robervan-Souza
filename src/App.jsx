import React from "react";
import { Sobre, Header, Experiencias, Projeto, Footer } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Home from "./container/home/Home";

const App = () => {
  return (
    <div className="app">
      <div className="app-navbar">
        <Navbar />
      </div>
      <div className="app-home">
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
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
};
export default App;
