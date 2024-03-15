import { useState } from "react";
const SelectCategory = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <select name={"select"} value={value} onChange={handleChange}>
      <option value={"Alimentation"}>Alimentation</option>
      <option value={"Logement"}>Logement</option>
      <option value={"Transport"}>Transport</option>
      <option value={"Divertissement"}>Divertissement</option>
      <option value={"Santé"}>Santé</option>
      <option value={"Éducation"}>Éducation</option>
      <option value={"Autres"}>Autres</option>
    </select>
  );
};

export default SelectCategory;
