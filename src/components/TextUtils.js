import React, { useState } from "react";
//import App from "../App";
// import { App } from "../App";

function TextUtils(props) {
  const [varError, setvarError] = useState("");
  const [vartext, setText] = useState("");
  const changeHandler = (event) => {
    setvarError("");
    setText(event.target.value);
  };
  //Text conversion to uppercase
  const handleUpcase = () => {
    funEmptyStringCheck();
    let k = vartext.toUpperCase();

    setText(k);
  };
  //Conversion to lower case
  const handleLowcase = () => {
    funEmptyStringCheck();
    let k = vartext.toLowerCase();
    setText(k);
  };
  //clear the text
  const handlerClear = () => {
    setText("");
    props.alert("text has beeen cleared", "success");
  };
  // copy text to clipboard
  const handlerCopy = () => {
    funEmptyStringCheck();
    var textSel = document.getElementById("txtArea");
    textSel.select();
    navigator.clipboard.writeText(textSel.value);
  };

  // All First word Upper case
  const handleFirstUpcase = () => {
    funEmptyStringCheck();
    let k = vartext.split(" ");
    let newtext = "";
    for (let itr in k) {
      newtext =
        newtext + k[itr].charAt(0).toUpperCase() + k[itr].slice(1) + " ";
    }
    setText(newtext);
  };

  // remove extra spaces

  const handlerRemoveExtraSpaces = () => {
    funEmptyStringCheck();
    let newTextVar = vartext.split(/[ ]+/);
    setText(newTextVar.join(" "));
  };

  // function empty string check

  const funEmptyStringCheck = () => {
    if (vartext.length === 0) {
      setvarError("String is empty, please add the text in box");
      alert("String is empty, please add the text in box");
    }
  };
  return (
    <>
      <p style={{ color: "red" }}> {varError}</p>
      <div className="container">
        <div mb-3>
          <textarea
            className="form-control"
            placeholder="Enter the text here "
            onChange={changeHandler}
            value={vartext}
            rows="8"
            id="txtArea"
          ></textarea>
        </div>
        <button
          className="btn btn-primary m-1"
          type="button"
          onClick={handleUpcase}
        >
          Upper case
        </button>

        <button
          className="btn btn-primary m-1"
          type="button"
          onClick={handleLowcase}
        >
          Lower case
        </button>

        <button
          className="btn btn-primary m-1"
          type="button"
          onClick={handleFirstUpcase}
        >
          Cap 1st letter
        </button>

        <button
          className="btn btn-primary m-1"
          type="button"
          onClick={handlerCopy}
        >
          Copytext
        </button>
        <button
          className="btn btn-primary m-1"
          type="button"
          onClick={handlerRemoveExtraSpaces}
        >
          Remove Extra spaces
        </button>

        <button
          className="btn btn-danger m-1"
          type="button"
          onClick={handlerClear}
        >
          Clear text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        Total Words are {vartext.split(" ").length - 1} and characters are{" "}
        {vartext.length}
        <p>Seconds to read {0.42 * (vartext.split(" ").length - 1)}</p>
        <h3>Preview </h3>
        {vartext.length > 0
          ? vartext
          : "Please enter the text in box to review here!!"}
      </div>
    </>
  );
}

export default TextUtils;
