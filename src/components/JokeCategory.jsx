import React, { useState } from "react";
import API from "../api/api";
import CategoryItem from "./CategoryItem";
import { useItem } from "../hooks/useItem";
import JokeContainer from "./JokeContainer";

const JokeCategory = () => {
    const { item, err } = useItem(API.getCategory);
    const [searchCategory, setSearchCategory] = useState("all");

    const handleCategory = (category) => {
        console.log(category);
        setSearchCategory(category);
    };

    return (
        <div className='catogory'>
            <div className='category-container container'>
                {item && (
                    <CategoryItem
                        categories={item}
                        handleCategory={handleCategory}
                    />
                )}
            </div>
            <JokeContainer searchCategory={searchCategory} />
        </div>
    );
};

export default JokeCategory;
