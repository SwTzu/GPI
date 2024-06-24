// src/redux/reducers.js
import {
    SET_SELECTED_STRAT,
    SET_SELECTED_STRAT_UNITS,
    FETCH_COMBINATIONS_REQUEST,
    FETCH_COMBINATIONS_SUCCESS,
    FETCH_COMBINATIONS_FAILURE
} from './actions';

const initialState = {
    selectedStrat: '',
    selectedStratUnits: [],
    combinations: [],
    loading: false,
    error: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_STRAT:
            return {
                ...state,
                selectedStrat: action.payload,
            };
        case SET_SELECTED_STRAT_UNITS:
            return {
                ...state,
                selectedStratUnits: action.payload,
            };
        case FETCH_COMBINATIONS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_COMBINATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                combinations: action.payload,
            };
        case FETCH_COMBINATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default rootReducer;
