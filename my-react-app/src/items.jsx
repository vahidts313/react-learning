import { useContext } from "react";
import { TestContext } from "./testContext";

const Item = (props) => {
  const context = useContext(TestContext);
  const handleRemove = (e) => {
    context.setTimeArr(context.timeArr.filter((c) => c !== e.target.innerHTML));
  };
  return (
    <div style={{ color: context }} onClick={handleRemove}>
      {props.children}
    </div>
  );
};

export default Item;
