import { Link } from "react-router";

type CarCardProps = {
  id: number;
  model: string;
};

const CarCard = ({ id, model }: CarCardProps) => {
  return (
    <div className="bg-gray-200">
      <h2>{model}</h2>
      <Link to={"/cars/" + id}>Read more</Link>
    </div>
  );
};

export default CarCard;
