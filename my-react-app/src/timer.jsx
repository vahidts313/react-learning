import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";

var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time: 10 };
  }
  startInterval = () => {
    interval = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
    }, 1000);
  };

  stopInterval = () => {
    clearInterval(interval);
  };

  componentDidMount() {
    this.startInterval();
  }

  componentDidUpdate() {
    if (this.state.time === 0) {
      this.stopInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2 className="timer">it is {this.state.time}</h2>
        <button onClick={() => this.props.handleSetTitle()}>تغییر عنوان</button>
        <button onClick={this.startInterval}>شروع تایمر</button>
        <button onClick={this.stopInterval}>توقف تایمر</button>
      </div>
    );
  }
}

export default Timer;
