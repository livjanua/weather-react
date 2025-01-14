import React from "react";
import Weather from "./Weather";
import "./Weather.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-name">Weather App</h1>
        <Weather />
        <br />
      </header>
    </div>
  );
}

export default App;
