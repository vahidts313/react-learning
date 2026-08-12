import { createRoot } from "react-dom/client";

const tick = () => {
  const elem = (
    <div>
      <h1>سلام دوستان </h1>
      <h2>الان دقیقا ساعت {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(elem);
};
const root = createRoot(document.getElementById("root"));

setInterval(() => {
  tick();
}, 1000);
