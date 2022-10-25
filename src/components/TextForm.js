import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newTxt = text.toUpperCase();
    setText(newTxt);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowClick = () => {
    let newTxt = text.toLowerCase();
    setText(newTxt);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
    setCopy({
      text: "Copy",
      class: "btn-primary",
    });
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text.value);
    setCopy({
      text: "Copied",
      class: "btn-secondary",
    });
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); // regular expression to select 1 or more spaces
    setText(newText.join(" "));
    props.showAlert("Formatted", "success");
  };
  const [text, setText] = useState("");
  const [copy, setCopy] = useState({
    text: "Copy",
    class: "btn-primary",
  });

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#212529" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-4">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529cd",
              color: props.mode === "dark" ? "white" : "#212529",
            }}
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
          ></textarea>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly gap-2">
          <button className="btn btn-danger" onClick={clearText}>
            Clear
          </button>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Uppercase
          </button>
          <button className="btn btn-primary" onClick={handleLowClick}>
            LowerCase
          </button>
          <button className="btn btn-primary" onClick={handleExtraSpaces}>
            Format
          </button>
          <button className={"btn " + copy.class} onClick={handleCopy}>
            {copy.text}
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#212529" }}
      >
        <h2>Text Summary</h2>
        {/* shows "1 words" when nothing is written -- */}
        {/* <p>{text.replace(/\n/g, " ").trim().split(" ").length} words</p> */}
        {/* shows "0 words" when nothing is written -- */}
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words
        </p>{" "}
        <p>{text.length} characters.</p>
        <p>
          {text
            .replace(/\n/g, " ")
            .split(" ")
            .filter((value) => value !== "").length * 0.008}{" "}
          minutes read
        </p>
        <h4>Preview</h4>
        <p id="preview-text" >{text.length > 0 ? text : "your Preview will appear here"}</p>
      </div>
    </>
  );
}
