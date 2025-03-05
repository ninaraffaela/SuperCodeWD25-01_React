import ShopItem from "../ShopItem/ShopItem";
import OilImg from "../../assets/img/bodyoil_coco.jpg";
import PolaroidImg from "../../assets/img/polaroid.jpg";
import ShampooImg from "../../assets/img/shampo_bamboo.jpg";

type shopItem = {
    productName: string;
    price: number;
    img: string;
}

const shopItemsArr: shopItem[] = [
    {
        productName: "Coconut Body Oil",
        price: 30,
        img: OilImg,
    },
    {
        productName: "Polaroid",
        price: 60,
        img: PolaroidImg,
    },
    {
        productName: "Bamboo Shampoo",
        price: 20,
        img: ShampooImg,
    },
];


const ShopDisplay = () => {
    return ( 
        <div className="products">
        {shopItemsArr.map((singleShopItem) => (
            <ShopItem 
            image={singleShopItem.img}
            productName={singleShopItem.productName}
            price={singleShopItem.price}
            />
            
        ))}
        <button>Buy Now</button>
        </div>
     );
}
 
export default ShopDisplay;