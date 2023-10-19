import React, { useState, useRef } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [textDirection, setTextDirection] = useState("ltr");
  const textareaRef = useRef(null);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleSelectClick = (event) => {
    let text = document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("All text is selected!", "success");
  };
  const handleDirectionClick = () => {
    const newDirection = textDirection === "ltr" ? "rtl" : "ltr";
    setTextDirection(newDirection);
    props.showAlert("direction Changed!", "success");
  };
  const handleReverseClick = () => {
    const reversedText = text.split(" ").reverse().join(" ");
    setText(reversedText);
    props.showAlert("All text reversed!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "#fff" : "#000" }}>
        <h1>{props.heading}</h1>
        <div className="mb-4">
          <textarea
            className="form-control"
            ref={textareaRef}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            dir={textDirection}
            style={{
              backgroundColor: props.mode === "dark" ? "#999" : "#fff",
              color: props.mode === "dark" ? "#fff" : "#999",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary me-3" onClick={handleLowClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary me-3" onClick={handleSelectClick}>
          Select all text and copy to clipboard
        </button>
        <button className="btn btn-primary me-3" onClick={handleDirectionClick}>
          Change text direction
        </button>
        <button className="btn btn-primary me-3" onClick={handleReverseClick}>
          Reverse text
        </button>
      </div>
      <div className="container my-5" style={{ color: props.mode === "dark" ? "#fff" : "#000" }}>
        <h1>Your text summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          {text.length}{" "}
        </p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text in text box to preview it here"}</p>
      </div>
    </>
  );
}
