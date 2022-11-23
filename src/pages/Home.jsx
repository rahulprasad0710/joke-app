import React from "react";
import Navbar from "../components/Navbar";

import JokeCategory from "../components/JokeCategory";
import JokeContainer from "../components/JokeContainer";
import { Routes, Route } from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <Navbar />

            <section>
                <Routes>
                    <Route path='catgeory' element={<Joke />} />
                    <Route path='joke/:jokeId' element={<Joke />} />
                </Routes>
            </section>
            <section>
                <JokeCategory />
                <JokeContainer />
            </section>
        </div>
    );
};

export default Home;
