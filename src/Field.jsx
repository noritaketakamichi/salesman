import logo from "./logo.svg";
import "./App.css";

const start = [0, "tokyo", 35.68944, 139.69167];

function App() {
  const location = require("./location");
  const arr = [0, 0, 0, 0];
  return (
    <div className="field">
      {location.map((elm) => {
        const left = (elm[2]-25)*25;
        const bottom = (elm[3] - 125)*25;
        return <div className="circle" style={{ left: left,bottom:bottom }}></div>;
      })}
    </div>
  );
}

export default App;
