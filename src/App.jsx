import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState(0);

  function handleInput(value) {
    if (displayValue === 0) {
      setDisplayValue(value);
    } else if (displayValue) {
      let newDisplayValue = displayValue;
      setDisplayValue((newDisplayValue += value));
    }
  }

  function handleResult(e) {
    e.preventDefault();
    let result = eval(displayValue);
    try {
      setDisplayValue(result);
    } catch (Error) {
      setDisplayValue("Error");
    }
  }

  function handleClear() {
    setDisplayValue(0);
  }

  return (
    <>
      <h1>React Calculator App</h1>
      <div className="calculator">
        <div className="display">
          <input
            type="text"
            onChange={(e) => setDisplayValue(e.target.value)}
            value={displayValue}
            readOnly
          />
          <button onClick={handleResult}>=</button>
        </div>
        <div className="inputs">
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("+")}>+</button>
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("-")}>-</button>
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("*")}>*</button>
          <button onClick={() => handleInput(".")}>.</button>
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleInput("/")}>/</button>
        </div>
      </div>
    </>
  );
}

export default App;
