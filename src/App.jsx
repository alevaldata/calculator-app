import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState(0);

  function handleInput(value) {
    if (!displayValue) {
      setDisplayValue(value);
    } else if (displayValue) {
      let newDisplayValue = displayValue + value;
      setDisplayValue(newDisplayValue);
    }
  }

  function handleResult() {
    let result = eval(displayValue);
    setDisplayValue(result);
  }

  function handleClear() {
    setDisplayValue(0);
  }

  function handleDel() {
    if (displayValue.length == 1) {
      setDisplayValue(0);
    } else {
      let newDisplayValue = displayValue.slice(0, -1);
      setDisplayValue(newDisplayValue);
    }
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
        </div>
        <div className="inputs">
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("+")}>+</button>
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("-")}>-</button>
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("*")}>*</button>
          <button onClick={() => handleInput(".")}>.</button>
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={handleDel}>del</button>
          <button onClick={() => handleInput("/")}>/</button>
          <button className="result-btn" onClick={handleResult}>=</button>
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </>
  );
}

export default App;
