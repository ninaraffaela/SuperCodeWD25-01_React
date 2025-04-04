
import './App.css'
import CashForm from './Components/CashForm'
import CreditCardDisplay from './Components/CreditCardDisplay';
import { useState } from 'react';

function App() {
  const [cashBalance, setCashBalance] = useState(0)  

  return (
    <main>
      <CreditCardDisplay cashBalance={cashBalance} />
      <h1>👾SUPERBANK👾</h1>
      <CashForm cashBalance={cashBalance} setCashBalance={setCashBalance}/>
    </main>
  )
}

export default App
