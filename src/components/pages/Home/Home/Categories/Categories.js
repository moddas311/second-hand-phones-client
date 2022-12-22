import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('https://used-product-seller-assignment-server-side.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='text-center my-10'>
            <div>
                <h1 className='text-3xl font-bold text-green-400'>Here is all categories</h1>
            </div>
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>
                {
                    categories.map(singleCategory => <Category
                        key={singleCategory._id}
                        singleCategory={singleCategory}
                    />)
                }
            </div>
        </div>
    );
};

export default Categories;