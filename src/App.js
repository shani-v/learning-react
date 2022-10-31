import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  let [name, setName] = useState("Varun");

  const changeName = (n) => {
    setName(n);
  };

  return (
    <div className="App">
      <div>{name}</div>
      <button onClick={() => changeName("Ram")}>Change Name</button>
      <Home name="Ballo" />
      <Home name="Varun" />
      <Home name="Sh" />
    </div>
  );
}

export default App;
