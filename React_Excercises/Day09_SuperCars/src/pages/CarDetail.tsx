import { useParams } from "react-router";
import data from '../data/data.json'

const CarDetail = () => {
  const params = useParams()
//   data.find // hier weitermachen

  return (
    <div>
        <h2>{data[Number(params.id)].carModel}</h2>
        <p>{data[Number(params.id)].CarMake}</p>
        <p>{data[Number(params.id)].CarYear}</p>
        
    </div>
  )
}

export default CarDetail
