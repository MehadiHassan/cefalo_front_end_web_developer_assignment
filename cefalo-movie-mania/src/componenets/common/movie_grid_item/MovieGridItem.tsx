import { cid, useInject } from 'inversify-hooks';
import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import MoviesService from '../../../services/movies/MoviesService';
import { MovieItem } from '../../../data_model/commonData/MovieItem';
import { MoveDetailsData } from '../../../data_model/movies/MoviesData';
import DefaultPoster from '../../../assets/images/deafult-poster.jpg';

interface MovieGridItemProps {
    movies: MovieItem;
}

const MovieGridItem: React.FC<MovieGridItemProps> = (movieGridItemprops: MovieGridItemProps) => {
    const [moviesService] = useInject<MoviesService>(cid.MoviesService);
    const [moviePoster, SetMoviePoster] = useState<string>('');
    const FetchMovieDetailsInfoAsync = (movieID: number): Promise<MoveDetailsData> => {
        return moviesService.getMovieDetails(movieID);
    };

    useEffect(() => {
        FetchMovieDetailsInfoAsync(movieGridItemprops.movies.id).then((movieDetailsResponse: MoveDetailsData) => {
            if (movieDetailsResponse.poster_path)
                SetMoviePoster(`https://image.tmdb.org/t/p/w220_and_h330_face${movieDetailsResponse.poster_path}`);
        });
    }, [moviePoster]);

    return (
        <div className="movie-inner-content">
            <img
                className="poster-image"
                src={!moviePoster || moviePoster == null ? DefaultPoster : moviePoster}
                alt="poster"
            />
            <span className="name"> {movieGridItemprops.movies.original_title}</span>
            <div className="description">{movieGridItemprops.movies.overview}</div>
            <div className="release-date">{movieGridItemprops.movies.release_date}</div>
            <span className="popularity-water-mark">
                <IconContext.Provider value={{ className: 'popularity-icon' }}>
                    <div>
                        <FaHeart />
                    </div>
                </IconContext.Provider>
                {movieGridItemprops.movies.popularity}
            </span>
        </div>
    );
};

export default MovieGridItem;
