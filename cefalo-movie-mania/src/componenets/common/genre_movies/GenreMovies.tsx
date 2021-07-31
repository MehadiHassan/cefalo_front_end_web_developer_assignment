import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';
import { MoviesData } from '../../../data_model/movies/MoviesData';

interface GenreMoviesProps {
    genreId: number;
}

const GenreMovies: React.FC<GenreMoviesProps> = (genreMoviesProps: GenreMoviesProps) => {
    const movies = useSelector((state: RootState) => state.MovieList.movies);
    const moviesByGenreID: MoviesData[] = movies.filter(movieItem => movieItem.id === genreMoviesProps.genreId);

    return <>{moviesByGenreID[0]?.id !== undefined ? <div>{moviesByGenreID[0].id}</div> : null}</>;
};

export default GenreMovies;
