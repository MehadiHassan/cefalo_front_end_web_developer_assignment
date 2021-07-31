import { MoviesData } from '../../data_model/movies/MoviesData';
import { SET_MOVIES_BY_GENRE_ID, MoviesActionTypes } from './types';

export const SetMoviesByGenreIdToStore = (data: MoviesData[]): MoviesActionTypes => {
    return {
        type: SET_MOVIES_BY_GENRE_ID,
        moviesData: data,
    };
};
