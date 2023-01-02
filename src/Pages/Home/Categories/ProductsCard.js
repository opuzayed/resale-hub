import { Card } from "flowbite-react";
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
  //console.log(image_url);
  return (
    <div>
      <div className="max-w-sm">
        <Card imgAlt="laptop pic" imgSrc={image_url}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ProductName : {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Location : {location}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ResalePrice : ${resalePrice}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            OriginalPrice : ${originalPrice}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            YearOfUse : {yearOfUse}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Date : {date}
          </p>
          <div>
            <label htmlFor="booking-modal" onClick={()=>setSingleProduct(item)} className="btn text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Book Now</label>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductsCard;
