import "./NumberDisplayItems.css";


type NumberDisplayItemsProps = {
    numberCount: number;
    numberTitle: string;
}

const NumberDisplayItems = (props: NumberDisplayItemsProps) => {
    console.log(props);
    
  return (
    <div className="number-item">
      <h2>{props.numberCount}</h2>
      <p>{props.numberTitle}</p>
    </div>
  )
}

export default NumberDisplayItems
