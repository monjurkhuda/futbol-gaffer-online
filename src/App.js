import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Lineup from "./pages/Lineup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Lineup
          homeClubName={"Manchester UFC"}
          awayClubName={"Manchester City"}
          name={"jugnu"}
        />
        {/* <Lineup clubName={"Manchester City"} name={"jugnu"} /> */}
      </header>
    </div>
  );
}

export default App;
