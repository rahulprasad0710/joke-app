import React from "react";
import Navbar from "../components/Navbar";
import cover_pic from "../assets/assets_Homework_Front-End_01/bitmap@3x.png";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='home_cover_img-container'>
                <div className='home-cover-content'>
                    <div className='home_cover-title'>The Joke Bible</div>
                    <div className='home_cover-subtitle'>
                        Daily Laughs for you and yours
                    </div>
                    <input
                        className='home_input'
                        type='text'
                        name=''
                        id=''
                        placeholder='How can we make you laugh ?'
                    />
                </div>

                <img
                    className='home_cover_pic'
                    src={cover_pic}
                    alt='Cover img'
                />
            </div>
        </div>
    );
};

export default Home;
