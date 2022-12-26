import React from "react";
import CategoryCard from "./CategoryCard";


const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      name: "Microsoft",
      description:"Find the best Microsoft price! Microsoft for sale in this site. Buy and sell second hand Computers & Laptops in this site. Computers Hub provides the best second-hand Laptop.",
      img:'https://c.s-microsoft.com/en-us/CMSImages/Surfcae_LaptopFamily_Hero_Poster_1920_Fall22.jpg?version=485cfabf-aff4-f61a-b4c3-f05c80bd8229'
      
    },
    {
      id: 2,
      name: "HP",
      description:"We offer used HP laptop price at affordable ranges. When it comes to laptop 2nd hand.A used HP laptop can allow people to be productive and have fun while on the go.",
      img: "https://www.gizbot.com/images/2017-05/hp-pavilion-15-laptop_149500618680.jpg"
      
    },
    {
      id: 3,
      name: "DELL",
      description:"Find here Dell Second Hand Laptop, Dell Used Laptop dealers, retailers, stores & distributors. Get latest prices, models & wholesale prices for buying Dell.",
      img: "https://m.media-amazon.com/images/I/81UtZBSGhwL._AC_SL1500_.jpg"
    },
  ];
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 mt-5">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Laptop Brands For You
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Computer's hub is offering the best 2nd hand laptop. Are you want to know 2nd hand and used laptop prices in Bangladesh? You land in the right place.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {
            categoriesData.map(category => <CategoryCard
             key={category.id}
             category={category}
             ></CategoryCard>)
          }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
