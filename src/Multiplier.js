import React, { useState } from "react";
import "./Multiplier.css";
import { multiplyNumbers } from "./apiService";
import NumberInput from "./components/NumberInput";

function Multiplier() {
  const [num1, setNum1] = useState(""); // State for the first number
  const [num2, setNum2] = useState(""); // State for the second number
  const [result, setResult] = useState(null); // State for the result
  const [error, setError] = useState(""); // State for error message

  // Handle form submission for multiplication
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
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

    setError(""); // Clear any previous error
    const { result, error } = await multiplyNumbers(parseInt(num1), parseInt(num2)); // Perform multiplication

    // Handle result or error from API
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
          {/* Number input for the first number */}
          <NumberInput value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" />
          {/* Number input for the second number */}
          <NumberInput value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" />
          <button type="submit" className="submit-button">Multiply</button>
        </form>
        {/* Display error if exists */}
        {error && <p className="error">{error}</p>}
        {/* Display result if available */}
        {result !== null && <p className="result">Result: {result}</p>}
      </div>
    </div>
  );
}

export default Multiplier;
