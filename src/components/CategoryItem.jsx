import React from "react";

const CategoryItem = ({ categories }) => {
    console.log(categories);
    return (
        <>
            {categories &&
                categories.map((item, index) => (
                    <div key={index} className='category-item'>
                        {item}&nbsp;JOKES
                    </div>
                ))}
        </>
    );
};

export default CategoryItem;
