import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SelectCategory from "./component/SelectCategory";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SelectCategory />
      </div>
    </>
  );
}

export default App;
