/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MyServiceCard = ({ item }) => {

  return (
    <Link to={`details/${item.id}`}>
     <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className=" h-52 w-full"
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

export default MyServiceCard;
