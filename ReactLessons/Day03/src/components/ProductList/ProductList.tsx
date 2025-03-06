import BuyBtn from "../BuyBtn/BuyBtn";
import ProductItem from "../ProductItem/ProductItem";


type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const shopItems: Product[] = [
  {
    id: 1,
    title: "cocooil",
    description: "Description for Product 1",
    price: 30,
    image:
      "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
  },
  {
    id: 2,
    title: "Polaroid Camera",
    description: "Description for Product 2",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Bamboo Shampoo",
    description: "Description for Product 3",
    price: 20,
    image:
      "https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
  },
  {
    id: 4,
    title: "cocooil",
    description: "Description for Product 1",
    price: 30,
    image:
      "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
  },
  {
    id: 5,
    title: "Polaroid Camera",
    description: "Description for Product 2",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    title: "Bamboo Shampoo",
    description: "Description for Product 3",
    price: 20,
    image:
      "https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
  },
  {
    id: 7,
    title: "cocooil",
    description: "Description for Product 1",
    price: 30,
    image:
      "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
  },
  {
    id: 8,
    title: "Polaroid Camera",
    description: "Description for Product 2",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 9,
    title: "Bamboo Shampoo",
    description: "Description for Product 3",
    price: 20,
    image:
      "https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
  },
  {
    id: 10,
    title: "cocooil",
    description: "Description for Product 1",
    price: 30,
    image:
      "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
  },
  {
    id: 11,
    title: "Polaroid Camera",
    description: "Description for Product 2",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 12,
    title: "Bamboo Shampoo",
    description: "Description for Product 3",
    price: 20,
    image:
      "https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
  },
];

const ProductList = () => {
  return (
    <div>
      <h2>ich bin die Produktliste</h2>
      {/* <ProductItem 
      productImage={shopItems[0].image}
      productTitle={shopItems[0].title}
      productPrice={shopItems[0].price}/> */}

      {shopItems.map((singleShopItem) => (
        <ProductItem
          key={singleShopItem.id}
          productImage={singleShopItem.image}
          productTitle={singleShopItem.title}
          productPrice={singleShopItem.price}
        >
        <BuyBtn text="Buy Now" />

        </ProductItem>
      ))}

      <ProductItem
        productTitle={shopItems[0].title}
        productImage={shopItems[0].image}
        productPrice={shopItems[0].price}
        productDescription={shopItems[0].description}
      >
        {/* //- Put in Children. Change the selfclosing Tag from <ProductItem  into ></ProductItem>  */}
        <button>Buy Nowww</button>
        <h3>Hallo Jule</h3>

        <BuyBtn text="Buy NOOOOW"/>
      </ProductItem>
    </div>
  );
};

export default ProductList;
