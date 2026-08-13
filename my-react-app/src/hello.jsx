import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";
class Hello extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default Hello;
