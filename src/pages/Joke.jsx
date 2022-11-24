import React from "react";
import API from "../api/api";
import { useParams } from "react-router-dom";
import { useItem } from "../hooks/useItem";
import backArrow from "../assets/assets_Homework_Front-End_02/arrow-left.png";
import arrowLeft from "../assets/assets_Homework_Front-End_02/arrow-left-copy-2.png";
import arrowRight from "../assets/assets_Homework_Front-End_02/arrow-left-copy.png";
import likeUp from "../assets/assets_Homework_Front-End_02/hand.png";
import likeDown from "../assets/assets_Homework_Front-End_02/hand-copy.png";

const Joke = () => {
    const { id } = useParams();
    const { item, err } = useItem(`${API.getJokeItem}${id}`);
    return (
        <div className='joke-page'>
            <div className='container'>
                <div className='back-btn-container'>
                    <div className='circle'>
                        <img src={backArrow} alt='Back' />
                    </div>
                </div>
                <div>
                    {item && (
                        <div className='joke-box'>
                            <div className='joke-content-container'>
                                <p>{item.value}</p>
                            </div>

                            <div className='joke-Likes-container'>
                                <div className='btn-like like-up'>
                                    <img src={likeUp} alt='Arrow Left' />
                                </div>
                                <div className='btn-like like-down'>
                                    <img src={likeDown} alt='Arrow Right' />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='joke-pagination-container'>
                        <button className='btn-secondary'>
                            <img src={arrowLeft} alt='Arrow Left' />
                            PREV JOKES
                        </button>
                        <button className='btn-secondary'>
                            NEXT JOKES
                            <img src={arrowRight} alt='Arrow Right' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Joke;
