import { SET_MOVIES_BY_GENRE_ID, MoviesState, MoviesActionTypes } from './types';

export const SetMoviesByGenreIdToStore = (data: MoviesState): MoviesActionTypes => {
    return {
        type: SET_MOVIES_BY_GENRE_ID,
        moviesData: data,
    };
};
