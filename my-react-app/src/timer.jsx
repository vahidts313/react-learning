import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";

var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = { hour: 0, minute: 0, second: 0, isStarted: false };
  }
  startInterval = () => {
    if (!this.state.isStarted) {
      this.setState({ isStarted: true });

      interval = setInterval(() => {
        this.setState({ second: this.state.second + 1 });
        if (this.state.second === 60) {
          this.setState({ second: 0, minute: this.state.minute + 1 });
        }
        if (this.state.minute === 60) {
          this.setState({ minute: 0, hour: this.state.hour + 1 });
        }
      }, 1000);
    }
  };

  stopInterval = () => {
    this.setState({ isStarted: false });
    clearInterval(interval);
  };

  resetInterval = () => {
    this.setState({ hour: 0, minute: 0, second: 0 });
    clearInterval(interval);
    this.setState({ isStarted: false });
  };

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <div>
        <h2 className="timer">
          {`${h < 10 ? "0" + h : h} : ${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s}`}
        </h2>
        <button onClick={this.resetInterval}>ریست تایمر</button>
        <button onClick={this.startInterval}>شروع تایمر</button>
        <button onClick={this.stopInterval}>توقف تایمر</button>
      </div>
    );
  }
}

export default Timer;
