import { useState } from "react";

function AddTodo(){
    const [inputValue, setInputValue] = useState("");
    const handleSubmit: React.MouseEventHandler = (e) => {
        e.preventDefault()
        console.log("submitted");
        console.log(inputValue);
        
        
    }
  return (
    <form>
      <input type="text" value={inputValue} 
      onChange={(event)=>{setInputValue(event.target.value);
      }}/>

      <button onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default AddTodo
