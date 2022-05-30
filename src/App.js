import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import TextUtils from "./components/TextUtils";
//import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("lg");

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({ msg: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const handlerToggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.background = "white";
    } else {
      setmode("dark");
      document.body.style.background = "#34616e";
    }
  };

  return (
    // <Router>
    <>
      <NavBar mode={mode} toggleMode={handlerToggleMode} />
      <Alert alertText={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About />}></Route> */}

        {/* <Route
            exact
            path="/"
            element={<TextUtils mode={mode} alert={showAlert} />} */}

        <TextUtils mode={mode} alert={showAlert} />
        {/* //  </Route>
        // </Routes> */}
      </div>
    </>
    // </Router>
  );
}

export default App;
