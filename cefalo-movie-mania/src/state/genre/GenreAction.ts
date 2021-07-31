import { SET_GENRE_LIST, GenreState, GenreActionTypes } from './types';

export const SetGenreListToStore = (data: GenreState): GenreActionTypes => {
    return {
        type: SET_GENRE_LIST,
        genreData: data,
    };
};
