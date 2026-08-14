import Item from "./items";
import { useContext } from "react";
import { TestContext } from "./testContext";

const TimeList = () => {
  const context = useContext(TestContext);
  return (
    <div className="mine-time-list">
      {context.timeArr.map((c) => (
        <Item key={Math.random()}>{c}</Item>
      ))}
    </div>
  );
};

export default TimeList;
