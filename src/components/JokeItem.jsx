import React from "react";
import { Link } from "react-router-dom";
import star from "../assets/assets_Homework_Front-End_01/green-light-copy-2.png";
import downArrow from "../assets/assets_Homework_Front-End_01/path-copy-2.png";
const JokeItem = ({ jokeItem }) => {
    return (
        <div className='joke-item'>
            <div className='joke-title'>
                <img src={star} alt='*' />
                {jokeItem?.categories[0]}
                {jokeItem?.categories[0] ? " " : null} JOKE
            </div>
            <p className='joke-value'>{jokeItem.value}</p>
            <div className='joke-btn-container'>
                <Link className='joke-card-btn' to={`/joke/${jokeItem.id}`}>
                    SEE STATS <img src={downArrow} alt='*' />
                </Link>
            </div>
        </div>
    );
};

export default JokeItem;
