import React from "react";

const ProductsCard = ({ item, setSingleProduct }) => {
  const {
    image_url,
    name,
    location,
    resalePrice,
    originalPrice,
    yearOfUse,
    date,
  } = item;

  return (
    <div>
      <div className="card mx-auto w-96 bg-base-100 shadow-xl h-full">
        <figure>
          <img className="h-64 w-full" src={image_url} alt="Item Pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">ProductName : {name}</h2>
          <p> Location : {location}</p>
          <p>ResalePrice : {resalePrice}</p>
          <p>OriginalPrice : {originalPrice}</p>
          <p>YearOfUse : {yearOfUse}</p>
          <p> Date : {date}</p>
          <div className="card-actions">
            <label
              htmlFor="booking-modal"
              onClick={() => setSingleProduct(item)}
              className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
