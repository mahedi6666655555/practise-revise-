import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Fetch from "./components/Fetch/Fetch";

function App() {
  

  return (
    <div className="App">
      <div>
        <Header></Header>
        <Fetch></Fetch>
      </div>
    </div>
  );
}

export default App;
