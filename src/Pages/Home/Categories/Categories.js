import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay",
      img: "https://flowbite.com/docs/images/blog/image-1.jpg"
      
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay",
      img: "https://flowbite.com/docs/images/blog/image-1.jpg"
      
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay",
      img: "https://flowbite.com/docs/images/blog/image-1.jpg"
    },
  ];
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
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
