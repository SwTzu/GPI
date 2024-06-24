export const SET_SELECTED_STRAT = 'SET_SELECTED_STRAT';
export const SET_SELECTED_STRAT_UNITS = 'SET_SELECTED_STRAT_UNITS';

// actions.js
export const FETCH_COMBINATIONS_REQUEST = 'FETCH_COMBINATIONS_REQUEST';
export const FETCH_COMBINATIONS_SUCCESS = 'FETCH_COMBINATIONS_SUCCESS';
export const FETCH_COMBINATIONS_FAILURE = 'FETCH_COMBINATIONS_FAILURE';

export const fetchCombinations = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_COMBINATIONS_REQUEST });

        try {
            const response = await fetch('https://api2.metatft.com/tft-stat-api/augments_full2?queue=1100&patch=current&days=2&rank=CHALLENGER,DIAMOND,GRANDMASTER,MASTER&permit_filter_adjustment=true');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const combinationsArray = Object.entries(data.results)
                .map(([key, value]) => ({ key, ...value }))
                .filter(combination => combination.top_units.length > 1);

            dispatch({ type: FETCH_COMBINATIONS_SUCCESS, payload: combinationsArray });
        } catch (error) {
            dispatch({ type: FETCH_COMBINATIONS_FAILURE, error: error.message });
        }
    };
};

export const setSelectedStrat = (strat) => ({
    type: SET_SELECTED_STRAT,
    payload: strat,
});

export const setSelectedStratUnits = (units) => ({
    type: SET_SELECTED_STRAT_UNITS,
    payload: units,
});


