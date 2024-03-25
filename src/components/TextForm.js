import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Upercase button clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("lowercase button clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log("clear button clicked");
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtaSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <div className="container mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Covert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Covert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtaSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summmary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
