import React from "react";
import API from "../api/api";
import CategoryItem from "./CategoryItem";
import { useItem } from "../hooks/useItem";

const JokeCategory = () => {
    const { item, err } = useItem(API.getCategory);

    return (
        <div className='joke-category container'>
            <div className='category-container'>
                {item && <CategoryItem categories={item} />}
            </div>
        </div>
    );
};

export default JokeCategory;
