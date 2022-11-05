import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Home from "./Home";
import NavBar from "./components/NavBar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";

function App() {
  // let [name, setName] = useState("Varun");
  // const changeName = (n) => {
  //   setName(n);
  // };

  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

      {/* <div className="text-center">
        <div>{name}</div>
        <button onClick={() => changeName("Ram")}>Change Name</button>
        <Home name="Ballo" print={() => console.log("Hi")} />
        <Home name="Varun" />
        <Home name="Sh" />
      </div> */}
    </div>
  );
}

export default App;
