import React from "react";
import "./App.css";
import AlertCounter from "./components/alertCounter";
import Counter from "./components/counter";
import LogMount from "./components/logMount";

function App() {
  return (
    <div className="App">
      <main className="App-container">
        <AlertCounter />
        <Counter />
        <LogMount />
      </main>
    </div>
  );
}

export default App;
