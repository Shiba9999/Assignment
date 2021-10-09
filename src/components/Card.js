import React, { useState } from "react";
import PropTypes from "prop-types";

import dataFile from "../data.json";

import { useCart } from "../Context";

function Card({ dataDetails }) {
  const [quantity, setQuantity] = useState(1);
  const { state, dispatch } = useCart();

  function card({dataDetails}) {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: dataDetails,
    });
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: { id: dataDetails.id, quantity },
    });
    setQuantity(1);
  }
  function handleQuantity(e) {
    const { value } = e.target;

    setQuantity(value);
  }
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
    <p className='absolute top-2 right-2 text-xs italic text-gray-400'>hi</p>
    <img src={dataDetails.imageURl}  className="w-full h-2/5" objectFit='contain' /> 

    <div className="flex">
   
    </div>
    <p className='text-xs my-2 line-clamp-2'></p>
    <div>

    </div>
   
    <button className='mt-auto button'>Add to Basket</button>
 </div>
  );
}

export default Card;
