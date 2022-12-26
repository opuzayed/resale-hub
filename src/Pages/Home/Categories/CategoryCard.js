import { Button, Card } from "flowbite-react";
import React from "react";

const CategoryCard = ({ category }) => {
  const { name, description, img } = category;
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
          <Button size="lg" className="text-2xl" gradientDuoTone="tealToLime">See Items</Button>
        </Card>
      </div>
    </div>
  );
};

export default CategoryCard;
