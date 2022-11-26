import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ singleCategory }) => {
    const { category_Id, name, image } = singleCategory;
    return (
        <div
            style={{
                background: `url(${image})`
            }}
            className="card bg-base-200 shadow-xl mt-5">
            <div className="card-body justify-between">
                <h2 className="card-title text-4xl text-orange-600">{name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/categories/${category_Id}`} className="btn btn-success rounded-md">See ALl</Link>
                </div>
            </div>
        </div>
    );
};

export default Category;