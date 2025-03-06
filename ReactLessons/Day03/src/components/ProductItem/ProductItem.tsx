import React from "react";

type ProductItemProps = {
    productTitle: string;
    productImage: string;
    productPrice: number;
    cssClass: string;
    productDescription? : string;
    // - Type of children always "React.ReactNode"
    children?: React.ReactNode;

}

const ProductItem = (props: ProductItemProps) => {
  console.log(props);
  
  
    return (
    <div className={props.cssClass}>
      <img src={props.productImage} alt="cocooil" />
      <h2>{props.productTitle}</h2>
      <p>{props.productPrice}</p>
      <p>{props.productDescription}</p>
      {/* <button>Buy now</button> */}
      {/* //- Props Children */}
      {props.children}
    </div>
  )
}

export default ProductItem;



// ! Destructoring

// console.log(props);
// //   const imgUrl = props.productImage;
// //   const title = props.productTitle;
// //   const price = props.productPrice;
//  - davon die kurzform:
//     const {productImage, productTitle, productPrice} = props;
  
//     return (
//     <div>
//       <img src={productImage} alt="cocooil" />
//       <h2>{productTitle}</h2>
//       <p>{productPrice}</p>
//       <button>Buy now</button>
//     </div>
//   );
