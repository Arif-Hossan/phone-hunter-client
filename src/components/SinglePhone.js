import React from "react";
import { useLoaderData } from "react-router-dom";

const SinglePhone = () => {
  const singlePhone = useLoaderData();
  const { name, image, price, description } = singlePhone;
//   console.log(singlePhone);

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img src={image} alt="phone_image" />
      </div>
      <h4>{price}</h4>
      <p>{description}</p>
    </div>
  );
};

export default SinglePhone;
