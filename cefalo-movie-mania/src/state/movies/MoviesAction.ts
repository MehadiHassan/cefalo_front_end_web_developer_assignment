// import { MoviesData } from '../../data_model/movies/MoviesData';
import { SET_MOVIES_BY_GENRE_ID, MoviesActionTypes, GenreMoviesData } from './types';

export const SetMoviesByGenreIdToStore = (data: GenreMoviesData[]): MoviesActionTypes => {
    return {
        type: SET_MOVIES_BY_GENRE_ID,
        moviesData: data,
    };
};
