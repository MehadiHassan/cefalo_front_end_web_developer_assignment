import { MovieItem } from '../../data_model/commonData/MovieItem';

export const SET_MOVIES_BY_GENRE_ID = 'SET_MOVIES_BY_GENRE_ID';

export interface MoviesState {
    movies: {
        id: number;
        page: number;
        list: MovieItem[];
        total_pages: number;
        total_results: number;
    };
}

export interface SetMoviesByGenreIDAction {
    type: typeof SET_MOVIES_BY_GENRE_ID;
    moviesData: MoviesState;
}

export type MoviesActionTypes = SetMoviesByGenreIDAction;
