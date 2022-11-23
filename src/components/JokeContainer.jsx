import React, { useState } from "react";
import { useItem } from "../hooks/useItem";
import API from "../api/api";
import JokeItem from "./JokeItem";

const JokeContainer = () => {
    const [query, setQuery] = useState("all");

    const { item, err } = useItem(`${API.getJokes}+${query}`);

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
