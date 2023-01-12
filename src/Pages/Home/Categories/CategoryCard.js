import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, name, description, img } = category;
  console.log(img);
  return (
    <section>
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-64">
          <img
            src={img}
            alt="items pic"
            className="rounded-xl h-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p> {description}</p>
          <div className="card-actions">
            <Link to={`/products/${_id}`}><button className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">See Items</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CategoryCard;
