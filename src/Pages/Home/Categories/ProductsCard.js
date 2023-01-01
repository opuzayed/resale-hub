import { Button, Card } from "flowbite-react";
import React from "react";

const ProductsCard = ({ item }) => {

  const {
    image_url,
    name,
    location,
    resalePrice,
    originalPrice,
    yearOfUse,
    date,
  } = item;
  console.log(image_url);
  return (
    <div>
      <div className="max-w-sm">
        <Card
          imgAlt="laptop pic"
          imgSrc={image_url}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ProductName : {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Location : {location}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ResalePrice : {resalePrice}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            OriginalPrice : {originalPrice}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            YearOfUse : {yearOfUse}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Date : {date}
          </p>
          <div>
        <Button gradientDuoTone="tealToLime">
          Book Now
        </Button>
      </div>
        </Card>
        
      </div>
    </div>
  );
};

export default ProductsCard;
