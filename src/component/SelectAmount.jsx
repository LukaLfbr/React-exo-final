import React from "react";

const SelectAmount = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder="Enter amount"
    />
  );
};

export default SelectAmount;
