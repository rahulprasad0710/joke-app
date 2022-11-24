import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoverSection from "./components/CoverSection";
import JokeCategory from "./components/JokeCategory";
import Navbar from "./components/Navbar";

import Joke from "./pages/Joke";
import "./style/App.scss";
function App() {
    return (
        <Router>
            <Navbar />
            <CoverSection />
            <Switch>
                <Route path='/joke/:id'>
                    <Joke />
                </Route>
                <Route exact path='/'>
                    <JokeCategory />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
