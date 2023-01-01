import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from 'react-router-dom';


const CategoryCard = ({ category }) => {
   const { _id, name, description, img } = category;
   console.log(img);
  return (
    <div>
      <div className="max-w-sm">
        <Card imgSrc={img}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <Link to={`/products/${_id}`}><Button size="lg" className="text-2xl" gradientDuoTone="tealToLime">See Items</Button> </Link>
        </Card>
      </div>
    </div>
  );
};

export default CategoryCard;
