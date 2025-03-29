import { useState } from "react";
import "../App.css";

const CashForm = () => {
  return (
    <form>
      <p className="output-area"> 30000 €</p>
      <input type="number" placeholder="pick any amount"/>
      <div className="button-container">
        <button>⬆Cash-In</button>
        <button>⬇Cash-Out</button>
      </div>
    </form>
  );
};

export default CashForm;
