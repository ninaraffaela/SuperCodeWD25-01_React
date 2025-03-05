import ShopItem from "../ShopItem/ShopItem";
import HeadPhonesImg from "../../assets/img/headphones_blackWL.png";
import CouchImg from "../../assets/img/couch_yellow.png";
import BackPackImg from "../../assets/img/backpack_yellow.png";
import BookImg from "../../assets/img/book_creativespaces.png";
import BluetoothBoxImg from "../../assets/img/bluetoothBox.png";
import PaintingImg from "../../assets/img/painting_palmtree.png";
import "./ShopDisplay.css";

type shopItem = {
    productName: string;
    price: number;
    imgUrl: string;
};

const shopItemsArr: shopItem[] = [
    {
        productName: "Vifa Copenhagen 2.0 Loudspeaker",
        price: 799.00,
        imgUrl: BluetoothBoxImg,
    },
    {
        productName: "Bang & Olufsen Wireless Headphones",
        price: 174.00,
        imgUrl: HeadPhonesImg,
    },
    {
        productName: "Poketo: Creative Spaces",
        price: 25.00,
        imgUrl: BookImg,
    }, 
    {
        productName: "Ucon Acrobatics Hajo Backpack",
        price: 79.00,
        imgUrl: BackPackImg,
    },
    {
        productName: "Summer Print by Bratislav Milenkovic",
        price: 27.00,
        imgUrl: PaintingImg,   
    },
    {
        productName: "Paolo Modular Corner Sofa by Hem",
        price: 3699.00,
        imgUrl: CouchImg,
    }
]


const ShopDisplay = () => {
    return ( 
        <div className="shop-display">
        {shopItemsArr.map((singleShopItem) => (
            <ShopItem 
            productImage = {singleShopItem.imgUrl}
            productName = {singleShopItem.productName}
            productPrice = {singleShopItem.price}
            />
        ))}
        </div>
     );
};
 
export default ShopDisplay;