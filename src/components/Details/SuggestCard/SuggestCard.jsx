/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SuggestCard = ({item}) => {
    return (
        <Link to={`details/${item.id}`}>
        <div className="card card-compact  bg-base-100 shadow-xl">
         <figure>
           <img className="  w-full h-52"
             src={item.image}
             alt="sunglass"
           />
         </figure>
         <div className="card-body">
           <p>{item.name}</p>
   
         </div>
       </div>
   
       </Link>
    );
};

export default SuggestCard;