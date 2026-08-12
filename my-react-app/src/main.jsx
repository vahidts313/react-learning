import { createRoot } from "react-dom/client";
import React from "react";
class Hello extends React.Component {
  render() {
    return <h1>سلام دوستان </h1>;
  }
}
class Timer extends React.Component {
  render() {
    return <h2>الان دقیقا ساعت {new Date().toLocaleTimeString()}</h2>;
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Timer />
      </div>
    );
  }
}
const tick = () => {
  root.render(<App />);
};
const root = createRoot(document.getElementById("root"));

setInterval(() => {
  tick();
}, 1000);
