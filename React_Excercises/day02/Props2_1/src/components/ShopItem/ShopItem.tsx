import "./ShopItem.css";

type ShopItemProps = {
    productName: string;
    price: number;
    image: string;
}


const ShopItem = (props: ShopItemProps) => {
    return ( 
        <>
        <div className="product-card">
            <img src={props.image} alt="productimage" />
            <h2>{props.productName}</h2>
            <p>{props.price}</p>
            <button>BUY NOW</button>
        </div>
      
        </>
     );
}
 
export default ShopItem;