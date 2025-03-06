type BuyBtnProps = {
    text: string,
};

const BuyBtn = (props: BuyBtnProps) => {
    // - Eventlistener - define the fuction
    const aFunction = () => {
        console.log("ive been clicked");
        
    }
    return (
        // - Eventlistener - set it on the button
        <button onClick={aFunction}>{props.text}</button>
    )
  }
  
  export default BuyBtn



//   - Declare a type directly in the const, if its only one
// const BuyBtn = (props: {text: string}) => {
//   return (
//       <button>{props.text}</button>
//   )
// }

// export default BuyBtn
