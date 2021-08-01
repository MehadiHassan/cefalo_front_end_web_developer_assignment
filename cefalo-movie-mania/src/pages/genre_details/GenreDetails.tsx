import React, { useEffect, useState } from 'react';
import MoviesService from '../../services/movies/MoviesService';
import { MoviesData } from '../../data_model/movies/MoviesData';
import './_genreDetails.scss';
import { cid, useInject } from 'inversify-hooks';
import { useParams } from 'react-router-dom';
import { MovieItem } from '../../data_model/commonData/MovieItem';
import MovieGridItem from '../../componenets/common/movie_grid_item/MovieGridItem';

const GenreDetails: React.FC = () => {
    const { genreId } = useParams<{ genreId: string }>();
    const [genreMovieList, setGenreMovieList] = useState<MovieItem[]>([]);
    const [isGettingError, setIsGettingError] = useState<boolean>(false);
    const [moviesService] = useInject<MoviesService>(cid.MoviesService);
    const FetchMovieInfoAsync = (genreID: number, pageNumber: number): Promise<MoviesData> => {
        return moviesService.getData(genreID, pageNumber);
    };

    const GetMovieByPopularity = (movies: MovieItem[]): MovieItem[] => {
        return movies.sort((movieItem, comparedMovieItem) =>
            movieItem.popularity < comparedMovieItem.popularity
                ? 1
                : comparedMovieItem.popularity < movieItem.popularity
                ? -1
                : 0,
        );
    };

    useEffect(() => {
        FetchMovieInfoAsync(Number(genreId), 1)
            .then((moviesResponse: MoviesData) => {
                setGenreMovieList(GetMovieByPopularity(moviesResponse.results));
            })
            .catch(error => {
                console.log('Get error:-', error);
                setIsGettingError(true);
            });
    }, []);
    return (
        <div className="genre-content">
            {isGettingError ? (
                <div className="error-message"> No movie found.</div>
            ) : (
                <div className="movie-details-by-popularity container">
                    {genreMovieList.map(item => {
                        return (
                            <div key={item.id} className="movie-grid-item">
                                <MovieGridItem movies={item} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default GenreDetails;
