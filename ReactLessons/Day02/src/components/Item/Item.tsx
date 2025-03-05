
// Version 1 - see(itemsList.tsx aswell)
// const Item = (props) => {
//   console.log(props);
  
//     return (
//     <div>
//       <h2>{props.titlePizza}</h2>
//       <p>{props.pricePizza} Euro</p>
//     </div>
//   )
// }

// export default Item


type ShopItemProps = {
    titlePizza: string;
    pricePizza: number;
    imgPizza: string;

}


const Item = (props: ShopItemProps) => {
    console.log(props);
    
      return (
      <div>
        <h2>{props.titlePizza}</h2>
        <p>{props.pricePizza} Euro</p>
        <img src={props.imgPizza} alt={props.imgPizza} />
      </div>
    )
  }
  
  export default Item
