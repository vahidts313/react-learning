import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";
import Hello from "./hello";
import Timer from "./timer";
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Hello />
        <Timer />
      </div>
    );
  }
}

export default App;
