import React from "react";
import { Sobre, Experiencias, Projeto, Footer } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Home from "./container/home/Home";

const App = () => {
  const spanStyle = {
    "--i": "1",
  };
  return (
    <div className="app">
      <div className="app-navbar">
        <Navbar />
      </div>

      <div className="app-home v1">
        <div className="quadrado"></div>
        <div className="bolas">
          <span style={spanStyle}></span>
        </div>
        <Home />
        <div className="square"></div>
      </div>

      <div className="app-sobre">
        <div className="bolas1">
          <p style={{ "--i": 1 }}></p>
          <p style={{ "--i": 11}}></p>
          <p style={{ "--i": 21 }}></p>
          <p style={{ "--i": 31 }}></p>
          <p style={{ "--i": 2 }}></p>
          <p style={{ "--i": 12 }}></p>
          <p style={{ "--i": 22 }}></p>
          <p style={{ "--i": 3 }}></p>
          <p style={{ "--i": 13 }}></p>
          <p style={{ "--i": 23 }}></p>
          <p style={{ "--i":  4 }}></p>
          <p style={{ "--i": 14 }}></p>
          <p style={{ "--i": 24 }}></p>
          <p style={{ "--i": 5  }}></p>
          <p style={{ "--i": 15 }}></p>
          <p style={{ "--i": 25 }}></p>
          <p style={{ "--i": 6  }}></p>
          <p style={{ "--i": 16 }}></p>
          <p style={{ "--i": 26 }}></p>
          <p style={{ "--i": 7  }}></p>
          <p style={{ "--i": 17 }}></p>
          <p style={{ "--i": 27}}></p>
          <p style={{ "--i": 8 }}></p>
          <p style={{ "--i": 18}}></p>
          <p style={{ "--i": 28}}></p>
          <p style={{ "--i": 9 }}></p>
          <p style={{ "--i": 19}}></p>
          <p style={{ "--i": 29}}></p>
        </div>
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
