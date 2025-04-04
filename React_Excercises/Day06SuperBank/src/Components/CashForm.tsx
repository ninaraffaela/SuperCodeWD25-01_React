import "../App.css";
import { useState } from "react";

type CashFormProps = {
  cashBalance: number;
  setCashBalance: React.Dispatch<React.SetStateAction<number>>;
};
// const [cashBalance, setCashBalance] = useState(0)
// const [incrementCashBalance]
// const calculateCashBalance

const CashForm = ({cashBalance, setCashBalance}: CashFormProps) => {
  const [inputValue, setInputValue] = useState("")

  return (
    <form>
      <p className="output-area"> {cashBalance} € </p>
      <input type="number" placeholder="pick any amount" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}/>
      <div className="button-container">
        <button type="button" onClick={() => {
          setCashBalance((oldCashBalance) => (oldCashBalance + Number(inputValue)))
          setInputValue("")
        }}>⬆Cash-In</button>
        <button type="button" onClick={() => {
          setCashBalance((oldCashBalance) => (oldCashBalance - Number(inputValue)))
          setInputValue("")
        }}>⬇Cash-Out</button>
      </div>
    </form>
  );
};

export default CashForm;
