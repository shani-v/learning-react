import { useState } from "react";
import Home from "./Home";

function App() {
  let [name, setName] = useState("Varun");

  const changeName = (n) => {
    setName(n);
  };

  return (
    <div className="text-center">
      <div>{name}</div>
      <button onClick={() => changeName("Ram")}>Change Name</button>
      <Home name="Ballo" print={() => console.log("Hi")} />
      <Home name="Varun" />
      <Home name="Sh" />
    </div>
  );
}

export default App;
