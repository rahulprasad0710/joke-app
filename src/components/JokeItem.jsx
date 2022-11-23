import React from "react";

const JokeItem = ({ jokeItem }) => {
    return (
        <div className='joke-item'>
            <div className='joke-title'>
                {jokeItem?.categories[0]}
                {jokeItem?.categories[0] ? " " : null} JOKE
            </div>
            <p className='joke-value'>{jokeItem.value}</p>
        </div>
    );
};

export default JokeItem;
