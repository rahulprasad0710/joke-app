import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { jokeReducer } from "./reducers/jokeReducer";

const reducer = combineReducers({
    jokeStore: jokeReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    null,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
