import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Lineup from "./pages/Lineup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-2xl font-bold underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Lineup clubName={"Manchester UFC"} name={"jugnu"} />
        <Lineup clubName={"Manchester City"} name={"jugnu"} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
