import { useState } from "react";
import "./App.css";

function App() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputLastNameValue, setInputLastNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");


  return (
    <main>
      <form>
        <input type="text" value={inputNameValue}
        onChange={(event)=>(setInputNameValue(event.target.value))}/>
        <input type="text" value={inputLastNameValue}
        onChange={(event)=>(setInputLastNameValue(event.target.value))}/>
        <input type="text" value={inputEmailValue}
        onChange={(event)=>(setInputEmailValue(event.target.value))}/>
      </form>
      <p>Vorname: {inputNameValue}</p>
      <p>Nachname: {inputLastNameValue}</p>
      <p>Email: {inputEmailValue}</p>
    </main>
  );
}

export default App;
