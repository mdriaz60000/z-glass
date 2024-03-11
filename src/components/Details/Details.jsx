import { useLoaderData, useParams } from "react-router-dom";
import Container from "../shared/container/Container";
import { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard/DetailsCard";


const Details = () => {
    const {id} = useParams()
    console.log(id)
    const allSunglasses = useLoaderData()


    const [sunglasses, setSunglasses ] = useState({})

    useEffect(()=>{
        const findSunglass = allSunglasses?.find(item =>item.id==id)
        setSunglasses(findSunglass)
    },[allSunglasses,id])


  return (
    <Container>
      <div className=" mt-6">
        
      <DetailsCard sunglasses={sunglasses} allSunglasses={allSunglasses}  ></DetailsCard>
      </div>
    </Container>
  );
};

export default Details;
