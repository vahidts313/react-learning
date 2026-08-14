import Item from "./items";
const TimeList = (props) => {
  return (
    <div className="mine-time-list">
      {props.children.map((c) => (
        <Item key={Math.random()}>{c}</Item>
      ))}
    </div>
  );
};

export default TimeList;
