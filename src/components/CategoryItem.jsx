import React from "react";

const CategoryItem = ({ categories, handleCategory }) => {
    const colors = [
        "#ff5b5b",
        "#ff915b",
        "#ffbe5b",
        "#ffdf5b",
        "#57e690",
        "#8fe360 ",
        "#57dbe6",
    ];
    return (
        <>
            {categories &&
                categories.map((item, index) => (
                    <div
                        onClick={() => handleCategory(item)}
                        key={index}
                        style={{
                            backgroundColor:
                                colors[Math.floor(Math.random() * 7)],
                        }}
                        className='category-item'>
                        {item}&nbsp;JOKES
                    </div>
                ))}
        </>
    );
};

export default CategoryItem;
