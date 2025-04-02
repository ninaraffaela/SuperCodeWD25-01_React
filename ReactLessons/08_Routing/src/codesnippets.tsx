// ! Have a slideshow, depending on buttonclick [data[count]]
 import { useState, useEffect } from "react";
 
 type Bird = {
   name: string;
   latinName: string;
   description: string;
   food: string[];
   size: "XS" | "S" | "M" | "L" | "XL";
   imageUrl: string;
   songUrl: string;
 };
 
 function App() {
   const [birds, setBirds] = useState<Bird[]>([]);
   const [count, setCount] = useState(0);
 
   useEffect(() => {
     console.log("running useEffect");
     
      fetch("https://stfnsr-birdmeister.web.val.run/birds?withDetails=true")
     .then((res) => res.json())
     .then((data) => {
       // setBirds(data);
       setBirds([data[count]])
     });
   },[count])
  
 
   return (
     <>
       <div>
         <h1>Lovely Birdies</h1>
         <button
           onClick={() => {
             setCount((count) => count + 1);
           }}
         >
           {count}
         </button>
         <ul>
           {birds.map((bird) => (
             <li>{bird.name}</li>
           ))}
         </ul>
       </div>
     </>
   );
 }
 
 export default App;
 