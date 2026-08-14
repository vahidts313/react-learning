import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";
import Hello from "./hello";
import Timer from "./timer";
import { useEffect } from "react";
import TimeList from "./TimeList";
import { TestContext } from "./testContext";
const App = () => {
  const [title, setTitle] = React.useState("سلام دوستان عزیزم");
  const [isLight, setIsLight] = React.useState(false);
  const [timeArr, setTimeArr] = React.useState([
    "00 : 05 : 01",
    "00 : 05 : 02",
    "00 : 05 : 03",
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
    <TestContext.Provider value={{ timeArr, setTimeArr }}>
      <div
        className="main"
        style={{
          backgroundColor: isLight ? "white" : "black",
          // color: isLight ? "black" : "white",
        }}
      >
        <Hello title={title} />
        <Timer isLight={isLight} handleSetIsLight={handleSetIsLight} />
        <TimeList />
      </div>
    </TestContext.Provider>
  );
};

export default App;
