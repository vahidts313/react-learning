import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";
import Hello from "./hello";
import Timer from "./timer";
import { useEffect } from "react";
import TimeList from "./TimeList";

const App = () => {
  const [title, setTitle] = React.useState("سلام دوستان عزیزم");
  const [isLight, setIsLight] = React.useState(false);
  const [timeArr, setTimeArr] = React.useState([
    "00 : 05 : 01",
    "05 : 05 : 12",
  ]);

  useEffect(() => {
    console.log("useEffect is running");

    return () => {
      console.log("useEffect is cleaning up");
    };
  }, [isLight]);
  const handleSetIsLight = () => {
    setIsLight(!isLight);
  };

  return (
    <div
      className="main"
      style={{
        backgroundColor: isLight ? "white" : "black",
        // color: isLight ? "black" : "white",
      }}
    >
      <Hello title={title} />
      <Timer isLight={isLight} handleSetIsLight={handleSetIsLight} />
      <TimeList>{timeArr}</TimeList>
    </div>
  );
};

export default App;
