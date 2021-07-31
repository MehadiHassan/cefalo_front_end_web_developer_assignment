import { MoviesState, SET_MOVIES_BY_GENRE_ID, MoviesActionTypes } from './types';

export const initialState: MoviesState = {
    movies: [],
};

export function MoviesReducer(state = initialState, action: MoviesActionTypes): MoviesState {
    switch (action.type) {
        case SET_MOVIES_BY_GENRE_ID:
            return {
                ...state,
                movies: action.moviesData,
            };
        default:
            return state;
    }
}
