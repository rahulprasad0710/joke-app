import {
    GET_JOKESLIST_REQUEST,
    GET_JOKESLIST_SUCCESS,
    GET_JOKESLIST_FAILURE,
    ADD_JOKES_REQUEST,
    ADD_JOKES_SUCCESS,
    ADD_JOKES_FAILURE,
    GET_JOKES_REQUEST,
    GET_JOKES_SUCCESS,
    GET_JOKES_FAILURE,
    UPDATE_JOKES_REQUEST,
    UPDATE_JOKES_SUCCESS,
    UPDATE_JOKES_FAILURE,
    RESET_JOKES,
} from "../actionCreators/JOKESConstant.js";

const initialState = {
    jokes: null,
    jokesList: [],
    loading: false,
    error: null,
};

export const JOKESReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKES_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_JOKES_SUCCESS:
            return { ...state, loading: false, jokes: action.payload };
        case GET_JOKES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ADD_JOKES_REQUEST:
            return { ...state, loading: true };
        case ADD_JOKES_SUCCESS:
            return { ...state, loading: false, jokes: action.payload };
        case ADD_JOKES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case GET_JOKESLIST_REQUEST:
            return { ...state, loading: true };
        case GET_JOKESLIST_SUCCESS:
            return { ...state, loading: false, jokesList: action.payload };
        case GET_JOKESLIST_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_JOKES_REQUEST:
            return { ...state, loading: true };
        case UPDATE_JOKES_SUCCESS:
            return { ...state, loading: false, jokes: action.payload };
        case UPDATE_JOKES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case RESET_JOKES:
            return {
                ...state,
                jokes: null,
                loading: false,
                error: null,
            };

        default:
            return state;
    }
};
