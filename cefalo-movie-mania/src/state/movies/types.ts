import { MoviesData } from '../../data_model/movies/MoviesData';

export const SET_MOVIES_BY_GENRE_ID = 'SET_MOVIES_BY_GENRE_ID';

export interface MoviesState {
    movieGenreData: GenreMoviesData[];
}

export interface GenreMoviesData {
    id: number;
    movieGenreData: MoviesData;
}

export interface SetMoviesByGenreIDAction {
    type: typeof SET_MOVIES_BY_GENRE_ID;
    moviesData: GenreMoviesData[];
}

export type MoviesActionTypes = SetMoviesByGenreIDAction;
