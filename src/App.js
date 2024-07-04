import React from "react";
import { useState } from "react";

const messages = ["Train well", "Eat healthy ", "Become an athlete"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function decrease() {
    if (step > 1) setStep((prevState) => prevState - 1);
  }

  function increase() {
    if (step < 3) setStep((prevState) => prevState + 1);
  }

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <button onClick={toggleMenu} className="close">
        {isOpen ? "Close" : "Open"}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 && "active"}>1</div>
            <div className={step === 2 && "active"}>2</div>
            <div className={step === 3 && "active"}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={decrease}
              style={{ backgroundColor: "#5070f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={increase}
              style={{ backgroundColor: "#5070f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
