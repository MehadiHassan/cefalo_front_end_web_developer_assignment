import React from 'react';
import { MovieDetailsData } from '../../data_model/movies/MoviesData';
import './_movieWatchListItem.scss';

export interface MovieWatchListItemProps {
    movieDetails: MovieDetailsData;
}

const MovieWatchListItem: React.FC<MovieWatchListItemProps> = (movieWatchListItemProps: MovieWatchListItemProps) => {
    return (
        <div className="movie-watch-list-item-container">
            <h1> {movieWatchListItemProps.movieDetails.original_title}</h1>
        </div>
    );
};

export default MovieWatchListItem;
