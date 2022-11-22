import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./style/App.scss";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                {/* <Route path='jokes' element={<MovieList />} />
                <Route path='joke/:jokeId' element={<SingleMovie />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
