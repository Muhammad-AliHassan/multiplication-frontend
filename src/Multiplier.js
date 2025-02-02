import React, { useState } from "react";
import "./Multiplier.css";
import { multiplyNumbers } from "./apiService";
import NumberInput from "./components/NumberInput";

function Multiplier() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!num1 || !num2) {
      setError("Both numbers are required");
      setResult(null);
      return;
    }

    if (num1 < 0 || num2 < 0) {
      setError("Negative values are not allowed");
      setResult(null);
      return;
    }

    setError("");
    const { result, error } = await multiplyNumbers(parseInt(num1), parseInt(num2));

    if (error) {
      setError(error);
      setResult(null);
    } else {
      setResult(result);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Multiplication App</h1>
        <form onSubmit={handleSubmit}>
          <NumberInput value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" />
          <NumberInput value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" />
          <button type="submit" className="submit-button">Multiply</button>
        </form>
        {error && <p className="error">{error}</p>}
        {result !== null && <p className="result">Result: {result}</p>}
      </div>
    </div>
  );
}

export default Multiplier;
