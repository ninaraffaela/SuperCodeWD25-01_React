import "./App.css";
import { useState } from "react";
import { Planet } from 'react-kawaii';


const moods = ["sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"]

function App() {
  
  const [moodNumber, setMoodNumber] = useState(2); //default mood. 0 = sad, 2 =happy
  const generateMood = () => {
    const generateRandomNumber = Math.floor( Math.random() * 7 );
    setMoodNumber(generateRandomNumber)  
  } 

  console.log(moods[moodNumber]);
  
 

  return (
  <>
  <Planet size={200} mood={moods[moodNumber]} color="#FDA7DC" />
  <button onClick={generateMood} > Change Mood </button>
  </>
  )
}

export default App;
