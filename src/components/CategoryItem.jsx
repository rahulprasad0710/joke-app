import React from "react";

const CategoryItem = ({ categories, handleCategory }) => {
    console.log(categories);
    return (
        <>
            {categories &&
                categories.map((item, index) => (
                    <div
                        onClick={() => handleCategory(item)}
                        key={index}
                        className='category-item'>
                        {item}&nbsp;JOKES
                    </div>
                ))}
        </>
    );
};

export default CategoryItem;
