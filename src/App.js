import { useState } from "react";
import "./App.css";
function App() {
  let [name, setName] = useState("Varun");

  const changeName = (n) => {
    setName(n);
  };

  return (
    <div className="App">
      <div>{name}</div>
      <button onClick={() => changeName("Ram")}>Change Name</button>
      <div>This is React</div>
    </div>
  );
}

export default App;
