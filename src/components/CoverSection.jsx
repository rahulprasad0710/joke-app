import React, { useState, useEffect } from "react";
import axios from "axios";
import { useItem } from "../hooks/useItem";
import API from "../api/api";
import cover_pic from "../assets/assets_Homework_Front-End_01/bitmap@3x.png";

const CoverSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [item, setItem] = useState([]);
    const [showDropDown, setShowDropDown] = useState(false);

    useEffect(() => {
        console.log(searchTerm.length);
        if (searchTerm.length <= 3) {
            setItem([]);
        }
        if (searchTerm.length > 3) {
            const fetchItem = async () => {
                try {
                    const response = await axios.get(
                        `${API.getJokes}${searchTerm}`
                    );
                    if (response && response.data)
                        setItem(response.data.result);
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

    const handleSearchItems = (e) => {
        if (e.target.className !== "dropdown__item__") {
            setShowDropDown(false);
        }
    };

    return (
        <div className='home'>
            <div className='home_cover_img-container'>
                <div className='home-cover-content'>
                    <div className='home_cover-title'>The Joke Bible</div>
                    <div className='home_cover-subtitle'>
                        Daily Laughs for you and yours
                    </div>
                    <div class='cover_dropdown'>
                        <div class='cover-input-container'>
                            <input
                                className='home_input'
                                type='text'
                                name=''
                                id=''
                                value={searchTerm}
                                onChange={(e) => handleSearchTerm(e)}
                                placeholder='How can we make you laugh ?'
                            />
                        </div>
                        {item && item.length > 0 && showDropDown && (
                            <ul
                                onClick={(e) => handleSearchItems(e)}
                                className='dropdown__list__'>
                                {item.map((joke) => (
                                    <li className='dropdown__item__'>
                                        {joke.value}
                                    </li>
                                ))}
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
