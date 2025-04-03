// import CarCard from "../components/CarCard"
import data from "../data/data.json";
import CarCard from "../components/CarCard";

const CarOverview = () => {
  return (
    <div>
      <h1>irgendwas</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((singleCar) => {
          return <CarCard key={singleCar.id} id={singleCar.id} model={singleCar.carModel} />
        })}
      </div>
    </div>
  );
};

export default CarOverview;



