import React, { useState } from "react";
import { useItem } from "../hooks/useItem";
import API from "../api/api";
import JokeItem from "./JokeItem";

const JokeContainer = ({ searchCategory }) => {
    const { item, err } = useItem(`${API.getJokes}+${searchCategory}`);

    return (
        <div className='joke-container container'>
            {item &&
                item.result &&
                item.result.length > 0 &&
                item.result.map((jokeItem) => (
                    <JokeItem key={jokeItem.id} jokeItem={jokeItem} />
                ))}
        </div>
    );
};

export default JokeContainer;
