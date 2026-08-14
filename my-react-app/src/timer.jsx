import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";
import { TestContext } from "./testContext";
var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = { hour: 0, minute: 0, second: 0, isStarted: false };
  }

  static contextType = TestContext;

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

  handleSaveTime = () => {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    let newTime = (
      <button onClick={this.handleremoveTime}>
        {h > 9 ? h : "0" + h} : {m > 9 ? m : "0" + m} : {s > 9 ? s : "0" + s}
      </button>
    );
    this.context.setTimeArr([...this.context.timeArr, newTime]);
  };

  handleremoveTime = (index) => {
    let newArr = [...this.context.timeArr];
    newArr.splice(index, 1);
    this.context.setTimeArr(newArr);
  };

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <div>
        <h2
          className="timer"
          onClick={this.handleSaveTime}
          style={{ color: this.context }}
        >
          {`${h < 10 ? "0" + h : h} : ${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s}`}
        </h2>
        <button onClick={this.resetInterval}>ریست تایمر</button>
        <button onClick={this.startInterval}>شروع تایمر</button>
        <button onClick={this.stopInterval}>توقف تایمر</button>
        <button
          style={{
            backgroundColor: this.props.isLight ? "black" : "white",
            color: this.props.isLight ? "white" : "black",
          }}
          onClick={this.props.handleSetIsLight}
        >
          {this.context.isLight ? " تاریک" : "روشن"}
        </button>
      </div>
    );
  }
}

export default Timer;
