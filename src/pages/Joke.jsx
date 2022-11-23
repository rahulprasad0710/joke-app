import React from "react";
import API from "../api/api";
import { useParams } from "react-router-dom";
import { useItem } from "../hooks/useItem";

const Joke = () => {
    const { id } = useParams();

    const { item, err } = useItem(`${API.getJokeItem}${id}`);
    return (
        <div className='joke-page'>
            <div className='container'>
                {item && (
                    <div className='joke-box'>
                        <h1>{item?.categories[0]} JOKE</h1>
                        <p>{item.value}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Joke;
