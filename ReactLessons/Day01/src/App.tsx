import "./App.css"
import Home from "./pages/home/Home";

// ! Start of a React App
// 1. npm create vite@latest .
// 2. choose folderName Enter
// 3. choose React 
// 4. choose TS
// 5. npm install (npm i) //installs needed packets
// 6. npm run dev


  // ! Folder Structure in React
  // node_modules 
  // -> packets that are needed to run the code

  // public 
  // -> store imgs, sounds and fonts (like assets. navigate through paths like usual ./public/img.jpg)

  // src 
  // -> most important folder. contains components and pages

  // src/assets 
  // -> here you can store img aswell, but they have to be imported, in order to be used.  "import"
  
  // App.tsx 
  // -> main part of our app. connects all the pages. ("<Home/>")

  // App.css 
  // -> globally available. does not have to be imported. Styles of app.tsx - mostly empty

  // index.css 
  // -> globally available. (style of global elements like img max-width 100%,  :root --main-color: red;  etc.)



const App = () => {
  // * here you would write TS



  return (  
    // * here you would write html
    <>
    <Home/>
    </>
  );
}
 


export default App;