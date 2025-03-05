import "./ShopItem.css";

type ShopItemProps = {
    productImage: string;
    productName: string;
    productPrice: number;

}

const ShopItem = (props: ShopItemProps) => {
    return ( 
        <div className="product-card">
        <img src={props.productImage} alt="product image" />
        <h2>{props.productName}</h2>
        <p>{props.productPrice}</p>
        
        </div>
     );
}
 
export default ShopItem;