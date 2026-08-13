import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";
import Hello from "./hello";
import Timer from "./timer";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { title: "سلام دوستان عزیزم" };
//   }
//   handleSetTitle = () => {
//     this.setState({ title: "به وبسایت خودتان خوش آمدید " });
//   };

//   render() {
//     return (
//       <div className="main">
//         <Hello title={this.state.title} />
//         <Timer handleSetTitle={this.handleSetTitle} />
//       </div>
//     );
//   }
// }
const App = () => {
  const [title, setTitle] = React.useState("سلام دوستان عزیزم");
  const handleSetTitle = () => {
    setTitle("به وبسایت خودتان خوش آمدید ");
  };

  return (
    <div className="main">
      <Hello title={title} />
      <Timer handleSetTitle={handleSetTitle} />
    </div>
  );
};

export default App;
