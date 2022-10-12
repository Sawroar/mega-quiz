import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category/Category';

const Categories = () => {
    const allCategories = useLoaderData();
    const categories = allCategories.data


    return (

        <div className='container mt-5'>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">

                {categories.map(category => <Category key={category.id} category={category}></Category>)}
            </div>
        </div>
    );
};

export default Categories;