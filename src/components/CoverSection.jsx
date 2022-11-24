import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../api/api";
import cover_pic from "../assets/assets_Homework_Front-End_01/bitmap@3x.png";

const CoverSection = () => {
    const wrapperRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [item, setItem] = useState([]);
    const [showDropDown, setShowDropDown] = useState(false);
    const [getResponse, setGetResponse] = useState(false);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowDropDown(false);
        }
    };

    useEffect(() => {
        // console.log(searchTerm.length);
        if (searchTerm.length <= 3) {
            setItem([]);
            setShowDropDown(false);
        }
        if (searchTerm.length > 3) {
            const fetchItem = async () => {
                try {
                    const response = await axios.get(
                        `${API.getJokes}${searchTerm}`
                    );
                    if (response && response.data)
                        setItem(response.data.result);
                    setGetResponse(true);
                    setShowDropDown(true);
                } catch (error) {}
            };
            var timer = setTimeout(() => {
                fetchItem();
            }, 500);
        }

        return () => clearTimeout(timer);
    }, [searchTerm]);

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
        setShowDropDown(true);
    };

    const showDropDownFn = (value) => {
        setShowDropDown(value);
    };

    return (
        <div className='home'>
            <div className='home_cover_img-container'>
                <div className='home-cover-content'>
                    <div className='home_cover-title'>The Joke Bible</div>
                    <div className='home_cover-subtitle'>
                        Daily Laughs for you and yours
                    </div>
                    <div ref={wrapperRef} class='cover_dropdown'>
                        <div class='cover-input-container'>
                            <input
                                className='home_input'
                                type='text'
                                name=''
                                id=''
                                onClick={() => showDropDownFn(true)}
                                value={searchTerm}
                                onChange={(e) => handleSearchTerm(e)}
                                placeholder='How can we make you laugh ?'
                            />
                        </div>
                        {item && item.length > 0 && showDropDown && (
                            <ul className='dropdown__list__'>
                                {item.map((joke) => (
                                    <li
                                        key={joke.id}
                                        className='dropdown__item__'>
                                        <Link
                                            onClick={() =>
                                                showDropDownFn(false)
                                            }
                                            className='dropdown-joke-link'
                                            to={`/joke/${joke.id}`}>
                                            <span className='joke-text'>
                                                {joke.value}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {item &&
                            item.length === 0 &&
                            searchTerm.length > 3 &&
                            showDropDown &&
                            getResponse && (
                                <ul className='dropdown__list__'>
                                    <li className='dropdown__item__'>
                                        No Results Found.
                                    </li>
                                </ul>
                            )}
                    </div>
                </div>
            </div>

            <img className='home_cover_pic' src={cover_pic} alt='Cover img' />
        </div>
    );
};

export default CoverSection;
