/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import SuggestCard from "../SuggestCard/SuggestCard";
import useAxiosHost from "../../../Hooks/useAxiosHost";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const DetailsCard = ({sunglasses, allSunglasses}) => {

   const[ product , setProduct] = useState([])
   const axiosHost = useAxiosHost()

  useEffect(()=>{
    const filterSunglass = allSunglasses?.filter(item => item.gender== sunglasses.gender)
    setProduct(filterSunglass)
  },[allSunglasses,sunglasses.gender])

  const {name,price,image, description, gender} = sunglasses

  const handleBuyNow = () =>{
    
    const sunglassInfo ={
      name,
      image,
      description,
      price,
      gender
    }
    axiosHost.post("/sunglass", sunglassInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          title: 'success',
          text: 'added product',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

    return (
      <>
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <img  src={sunglasses.image} className="max-w-sm rounded-lg shadow-2xl flex-1" />
          <div>
            <h1 className="text-5xl font-bold">{sunglasses.name}</h1>
            <p className="py-6">{sunglasses.description}</p>
            <div className="flex items-center gap-6">
               <p> Price: ${sunglasses.price}</p>
               <p> gender: {sunglasses.gender}</p>               
            </div>
            <button onClick={handleBuyNow} className=" mt-3 btn btn-primary">buy now</button>
          </div>
        </div>
      </div>
      <section className="  w-full mx-auto mt-9 flex flex-row gap-4">
        {
          product?.slice(0,5).map(items =><SuggestCard key={items.id} items={items}></SuggestCard>)
        }
      </section>
      </>
    );
};

export default DetailsCard;