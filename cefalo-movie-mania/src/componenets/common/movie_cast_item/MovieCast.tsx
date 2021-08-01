import React from 'react';
import { MovieCastItem } from '../../../data_model/commonData/MovieCastItem';
import './_movieCastItem.scss';

interface MovieCastProps {
    castItem: MovieCastItem;
}

const MovieCast: React.FC<MovieCastProps> = (movieCastProps: MovieCastProps) => {
    return (
        <div className="movie-cast-item">
            <h1> {movieCastProps.castItem.name}</h1>
        </div>
    );
};

export default MovieCast;
