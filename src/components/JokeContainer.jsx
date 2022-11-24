import React, { useState, useEffect } from "react";
import { useItem } from "../hooks/useItem";
import API from "../api/api";
import JokeItem from "./JokeItem";
import arrowLeft from "../assets/assets_Homework_Front-End_02/arrow-left-copy-2.png";
import arrowRight from "../assets/assets_Homework_Front-End_02/arrow-left-copy.png";

const JokeContainer = ({ searchCategory }) => {
    const { item, err } = useItem(`${API.getJokes}+${searchCategory}`);
    const [allJokeList, setAllJokeList] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(12);

    const nextFn = () => {
        if (endIndex === allJokeList.length) {
            return;
        }
        if (allJokeList.length - endIndex < 12) {
            setEndIndex(allJokeList.length);
            setStartIndex(startIndex + 12);
        } else {
            setStartIndex(startIndex + 12);
            setEndIndex(endIndex + 12);
        }
    };
    const prevFn = () => {
        if (startIndex !== 0) {
            setStartIndex(startIndex - 12);
            setEndIndex(endIndex - 12);
        }
        return;
    };

    useEffect(() => {
        if (item && item.result && item.result.length > 0) {
            setAllJokeList(item.result);
            setStartIndex(0);
            setEndIndex(12);
        }
    }, [item]);

    useEffect(() => {
        if (allJokeList && allJokeList.length > 0) {
            if (allJokeList.length <= endIndex) {
                setEndIndex(allJokeList.length);
            }
            let tempList = allJokeList.filter(
                (joke, index) => index < endIndex && index >= startIndex
            );

            setfilteredList(tempList);
            window.scrollTo(0, 0);
        }
    }, [allJokeList, endIndex, startIndex]);

    return (
        <div className='container'>
            <div className='joke-container '>
                {item &&
                    item.result &&
                    item.result.length > 0 &&
                    filteredList.map((jokeItem) => (
                        <JokeItem key={jokeItem.id} jokeItem={jokeItem} />
                    ))}
            </div>
            {allJokeList && allJokeList.length > 0 && (
                <div className='joke-pagination-container'>
                    <button
                        className='btn-secondary'
                        disabled={startIndex === 0}
                        onClick={() => prevFn()}>
                        <img src={arrowLeft} alt='Arrow Left' />
                        PREV JOKES
                    </button>
                    <button
                        className='btn-secondary'
                        disabled={endIndex === allJokeList.length}
                        onClick={() => nextFn()}>
                        NEXT JOKES
                        <img src={arrowRight} alt='Arrow Right' />
                    </button>
                </div>
            )}
        </div>
    );
};

export default JokeContainer;
