import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import MyCard from "./components/card";
import Porfolio from "./components/porfolio";

import Contact from "./components/contact";

import { useSelector } from "react-redux";
import Theme from "./components/Theme";
import { Routes, Route } from "react-router";
import MainView from "./components/MainView";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`appContainer${theme}`} >
      <Navbar />
      <Theme />
      <MainView />
      <MyCard />
      <Porfolio />
      <Contact />
    </div>
  );
}

export default App;
{
  /* <div className={`appContainer${theme}`}>
       

      
        
        <Porfolio />
        
        <Contact />
        <Footer />
      </div> */
}
