import { MoviesState, SET_MOVIES_BY_GENRE_ID, MoviesActionTypes } from './types';

export const initialState: MoviesState = {
    movies: {
        id: 0,
        page: 0,
        list: [],
        total_pages: 0,
        total_results: 0,
    },
};

export function MoviesReducer(state = initialState, action: MoviesActionTypes): MoviesState {
    switch (action.type) {
        case SET_MOVIES_BY_GENRE_ID:
            return {
                ...state,
                movies: action.moviesData.movies,
            };
        default:
            return state;
    }
}
