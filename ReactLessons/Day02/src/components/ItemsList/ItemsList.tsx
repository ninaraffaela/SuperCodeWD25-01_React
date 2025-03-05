import Item from "../Item/Item";
import JeansImg from "../../assets/react.svg"

type shopItem = {
  productName: string;
  price: number;
  description: string;
  imgUrl: string;
  stock: number;
};

const shopItemsArr: shopItem[] = [
  {
    productName: "T-Shirt",
    price: 19.99,
    description: "Baumwoll-T-Shirt in verschiedenen Farben",
    //!  how to implement pictures from the public folder
    // use absolute path   "/public/pathToTheImage"
    imgUrl:
      "/public/vite.svg",
    stock: 50,
  },
  {
    productName: "Jeans",
    price: 49.99,
    description: "Slim-Fit-Jeans aus Denim",
    // ! how to implement pictures from the assets folder
    // have to be imported first
    // use with the Name you used above for the import. as "variableName"
    imgUrl:
      JeansImg,
    stock: 30,
  },
  {
    productName: "Sneakers",
    price: 79.99,
    description: "Bequeme Sneakers für den Alltag",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 20,
  },
  {
    productName: "Hoodie",
    price: 39.99,
    description: "Warmer Hoodie für kalte Tage",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 40,
  },
  {
    productName: "Jacke",
    price: 99.99,
    description: "Wind- und wasserabweisende Jacke",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 15,
  },
  {
    productName: "Hose",
    price: 29.99,
    description: "Leichte Stoffhose für den Sommer",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 60,
  },
  {
    productName: "Socken",
    price: 9.99,
    description: "Bequeme Socken aus Baumwolle",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 100,
  },
  {
    productName: "Mütze",
    price: 14.99,
    description: "Warme Mütze für den Winter",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 25,
  },
  {
    productName: "Schal",
    price: 24.99,
    description: "Weicher Schal aus Wolle",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 35,
  },
  {
    productName: "Handschuhe",
    price: 19.99,
    description: "Warme Handschuhe aus Leder",
    imgUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
    stock: 1,
  },
];

const ItemsList = () => {
  return (
    <div>
      {/* Version 3 - MAP */}
      {shopItemsArr.map((singleShopItem) => (
        <Item 
        titlePizza={singleShopItem.productName}
        pricePizza={singleShopItem.price}
        imgPizza={singleShopItem.imgUrl}
        />
    ))}
    </div>
  );
};

export default ItemsList;



{/* <Item />
      <Item />
      <Item />
      <Item />
      <Item /> */}


      {/* VERSION 1.  give Properties and Values to the components
        <Item titlePizza="Hoddie oder so was" pricePizza={10} />
        <Item titlePizza="Jeans was?" pricePizza={30} />
        <Item titlePizza="T-Shorts" pricePizza={50} /> */}



      {/* VERSION 2
    <Item 
    titlePizza={shopItemsArr[0].productName}
    pricePizza={shopItemsArr[0].price}
    />

    <Item 
    titlePizza={shopItemsArr[0].productName}
    pricePizza={shopItemsArr[0].price}
    /> */}