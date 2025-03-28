
import { useState } from 'react';

// //! destructuring arrays
// const arr = [1,2,3,4]
// const [a,b,c] = arr // a is 1, b is 2, etc
// console.log(a,b,c);


// //! Tuple
// // values of array are either numbers or strings
// const array: (number | string)[] = [1,2, "a"]
// const firstValueFromArray = array[0] // it could either be a number or string
// const [c, d] = array // c and d are either number or string


// const tuple: [number, string] = [1,"a"]
// const firstValueFromTuple = tuple[0] //it knows that the first value is the number
// const [a, b] = tuple // a is the number and b is the string


function App() {

//# normally initialised variables, are only rendered once.
  // let count = 0


  //* useState gives back a Tuple. the first entry is the value
  //* the second entry is the setter-function to update the valu
  
  const [count, setCount] = useState(0);
// # different way to write this oneliner
// const count = useState(0);
//   const countValue = count[0]
//   const countSetter = count[1]


  console.log("Rendering component now");
  console.log({count});

  const handleClick = () => {
    console.log("i´ve been clicked");
    //* setCount updates count and starts rerendering of the component
    setCount(count+1)
    // count++;
    // console.log(count);
    
    
  }

  return (
    <div>
      <button onClick={handleClick}>Current count: {count}</button>
    </div>
  )
}

export default App
