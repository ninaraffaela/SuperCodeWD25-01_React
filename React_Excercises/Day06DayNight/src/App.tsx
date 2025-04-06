import "./App.css";
import { useState } from "react";

const colorDark = "bg-stone-800 text-stone-50 h-screen flex flex-col items-center justify-center gap-6 "; 
const colorLight = "bg-stone-50 text-stone-800 h-screen flex flex-col items-center justify-center gap-6 ";

function App() {
  const [switchColor, setSwitchColor] = useState(true);

  
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setSwitchColor((prev) => !prev);
   
  };

  return (
    <main
      className={switchColor ? colorLight : colorDark}
    >
      <h1 className="text-4xl font-bold">{switchColor ? "Day" : "Night"}</h1>
      <button
        onClick={handleClick}
        className={
          "px-4 py-2 border rounded-[10px] cursor-pointer hover:bg-stone-500"
        }
      >
        Change to {switchColor ? "Night" : "Day"}
      </button>
    </main>
  );
}

export default App;
