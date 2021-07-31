import { MoviesData } from '../../data_model/movies/MoviesData';
// import { MovieItem } from '../../data_model/commonData/MovieItem';

export const SET_MOVIES_BY_GENRE_ID = 'SET_MOVIES_BY_GENRE_ID';

export interface MoviesState {
    movies: MoviesData[];
}

export interface SetMoviesByGenreIDAction {
    type: typeof SET_MOVIES_BY_GENRE_ID;
    moviesData: MoviesData[];
}

export type MoviesActionTypes = SetMoviesByGenreIDAction;
