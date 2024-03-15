import { useState } from "react";

const CategorySelect = ({ onChange }) => {
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <>
      <select name={"select"} value={selectValue} onChange={handleChange}>
        <option value={""}>Choisir une categorie</option>
        <option value={"Alimentation"}>Alimentation</option>
        <option value={"Logement"}>Logement</option>
        <option value={"Transport"}>Transport</option>
        <option value={"Divertissement"}>Divertissement</option>
        <option value={"Santé"}>Santé</option>
        <option value={"Éducation"}>Éducation</option>
        <option value={"Autres"}>Autres</option>
      </select>
    </>
  );
};

export default CategorySelect;
