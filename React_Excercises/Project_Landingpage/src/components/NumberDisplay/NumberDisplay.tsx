import NumberDisplayItems from "../NumberDisplayItems/NumberDisplayItems"


type NumberHighlight = {
    id: number;
    count: number;
    title: string;
};

const numberHighlightArr: NumberHighlight[] = [
{
    id: 1,
    count: 127,
    title: "Awards Received",
},
{
    id: 2,
    count: 1505,
    title: "Cups of Coffee",
},
{
    id: 3,
    count: 109,
    title: "Projects Completed",
},
{
    id: 4,
    count: 102,
    title: "Happy Clients",
},
];



const NumberDisplay = () => {
  return (
    <section className="number-display">
        {numberHighlightArr.map((singleNumber) => (
            <NumberDisplayItems 
            numberCount={singleNumber.count}
            numberTitle={singleNumber.title}
            />
        ))}
      
          
        
    </section>
  )
};

export default NumberDisplay
