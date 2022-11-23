import { BrowserRouter as Router, Route } from "react-router-dom";
import cover_pic from "./assets/assets_Homework_Front-End_01/bitmap@3x.png";
import JokeCategory from "./components/JokeCategory";
import Navbar from "./components/Navbar";

import Joke from "./pages/Joke";
import "./style/App.scss";
function App() {
    return (
        <Router>
            <Navbar />
            <section className='home'>
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
                </div>

                <img
                    className='home_cover_pic'
                    src={cover_pic}
                    alt='Cover img'
                />
            </section>
            <Route exact path='/'>
                <JokeCategory />
            </Route>
            <Route path='/joke/:id'>
                <Joke />
            </Route>
        </Router>
    );
}

export default App;
