import React from "react";

function NumberInput({ value, onChange, placeholder }) {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min="0"
      className="input-field"
    />
  );
}

export default NumberInput;
