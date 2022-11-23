import React from "react";
import { Link } from "react-router-dom";
const JokeItem = ({ jokeItem }) => {
    return (
        <div className='joke-item'>
            <div className='joke-title'>
                {jokeItem?.categories[0]}
                {jokeItem?.categories[0] ? " " : null} JOKE
            </div>
            <p className='joke-value'>{jokeItem.value}</p>
            <Link to={`/joke/${jokeItem.id}`}>SEE STATS</Link>
        </div>
    );
};

export default JokeItem;
