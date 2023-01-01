import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';
const Products = () => {
    const Productsitems = useLoaderData();
    const items = Productsitems.category_items;
   
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 m-8 justify-center'>
            {
                items.map(item => <ProductsCard 
                key={item._id}
                item={item}
                ></ProductsCard>)
            }
        </div>
    );
};

export default Products;