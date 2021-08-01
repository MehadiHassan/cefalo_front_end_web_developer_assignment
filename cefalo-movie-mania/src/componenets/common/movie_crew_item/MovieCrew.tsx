import React from 'react';
import { MovieCrewItem } from '../../../data_model/commonData/MovieCrewItem';
import './_movieCrew.scss';

interface MovieCrewProps {
    crewItem: MovieCrewItem;
}

const MovieCrew: React.FC<MovieCrewProps> = (movieCrewProps: MovieCrewProps) => {
    return (
        <div className="movie-crew-item">
            <h1>{movieCrewProps.crewItem.name}</h1>
        </div>
    );
};

export default MovieCrew;
