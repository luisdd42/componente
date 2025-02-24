import { useState } from "react";
import "./App.css";
import { Suma } from "./componente/Suma.jsx";
import { Tituloalternativo } from "./componente/Tituloalternativo.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suma n1={5} n2={10} />
      <Tituloalternativo condicion={false} />
    </>
  );
}

export default App;
