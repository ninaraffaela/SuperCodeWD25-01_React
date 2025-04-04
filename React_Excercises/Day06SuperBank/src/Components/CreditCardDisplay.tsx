import { CreditCard } from "react-kawaii";

type CreditCardDisplayProps = {
  cashBalance: number;
};

type Mood = "ko"
| "sad"
| "happy"
| "lovestruck"
| "shocked"
| "blissful"
| "excited"

type Color = "#5f9ea0" | "#daa520"

const CreditCardDisplay = ({ cashBalance }: CreditCardDisplayProps) => {
  let mood: Mood = "ko";
  let color: Color = "#5f9ea0"
  
  if (cashBalance > 0) {
    mood = "sad";
    
  }
  if (cashBalance >= 100) {
    mood = "happy";
  }
  if (cashBalance >= 1000) {
    mood = "excited";
  }
  if (cashBalance >= 10000) {
    mood = "blissful";
  }

  if (cashBalance >= 1000000) {
    mood = "lovestruck";
    color = "#daa520"
  }

  return (
    <>
      <CreditCard size={240} mood={mood} color={color} />
    </>
  );
};

export default CreditCardDisplay;
