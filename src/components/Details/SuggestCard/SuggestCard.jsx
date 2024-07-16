/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";


const SuggestCard = ({items}) => {
  // const [sunglasses, setSunglasses] = useState([])

  // useEffect(()=>{
  //     fetch('sunglass.json').then(res=>res.json())
  //     .then(data=>setSunglasses(data))
  // },[])
    return (
         <Link to={`/details/${items.id}`}>
        <div className="card card-compact  bg-base-100 shadow-xl">
         <figure>
           <img className="  w-full h-52"
             src={items.image}
             alt="sunglass"
           />
         </figure>
         <div className="card-body">
           <p>{items.name}</p>
   
         </div>
       </div>
   
        </Link>
    );
};

export default SuggestCard;