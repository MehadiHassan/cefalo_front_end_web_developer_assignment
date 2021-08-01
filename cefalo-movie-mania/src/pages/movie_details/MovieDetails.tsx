import React, { useEffect, useState } from 'react';
import { cid, useInject } from 'inversify-hooks';
import MoviesService from '../../services/movies/MoviesService';
import { MoveDetailsData, MovieCastCrewData, MoviesData } from '../../data_model/movies/MoviesData';
import './_movieDetails.scss';
import { useParams } from 'react-router-dom';
import { MovieItem } from '../../data_model/commonData/MovieItem';
import MovieGridItem from '../../componenets/common/movie_grid_item/MovieGridItem';
import IMDBLink from '../../assets/images/imdb-link.svg';
import { MovieCastItem } from '../../data_model/commonData/MovieCastItem';
import { MovieCrewItem } from '../../data_model/commonData/MovieCrewItem';
import MovieCast from '../../componenets/common/movie_cast_item/MovieCast';
import MovieCrew from '../../componenets/common/movie_crew_item/MovieCrew';

const MovieDetails: React.FC = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const [isRelatedMoviesError, setIsRelatedMoviesError] = useState<boolean>(false);
    const [isGetMovieDetailsError, setIsGetMovieDetailsError] = useState<boolean>(false);
    const [isGetMovieCastCrewDataError, setIsGetMovieCastCrewDataError] = useState<boolean>(false);
    const [isGetMovieCastDataError, setIsGetMovieCastDataError] = useState<boolean>(false);
    const [isGetMovieCrewDataError, setIsGetMovieCrewDataError] = useState<boolean>(false);
    const [moviePoster, setMoviePoster] = useState<string>('');
    const [movieCastData, setMovieCastData] = useState<MovieCastItem[]>();
    const [movieCrewData, setMovieCrewData] = useState<MovieCrewItem[]>();
    const [movieDetails, setMovieDetails] = useState<MoveDetailsData>();
    const [relatedMovies, setRelatedMovies] = useState<MovieItem[]>();
    const [moviesService] = useInject<MoviesService>(cid.MoviesService);

    const FetchMovieDetailsInfoAsync = (movieID: number): Promise<MoveDetailsData> => {
        return moviesService.getMovieDetails(movieID);
    };

    const FetchMovieCastCrewInfoAsync = (movieID: number): Promise<MovieCastCrewData> => {
        return moviesService.getMovieCastCrewData(movieID);
    };

    const FetchRelatedMovieDetailsInfoAsync = (movieID: number): Promise<MoviesData> => {
        return moviesService.getRelatedMovies(movieID);
    };

    const GetMovieDetailsBasicInfoUIElement = (): JSX.Element => {
        return isGetMovieDetailsError ? (
            <div className="error-message"> Unable to get movie details.</div>
        ) : (
            <>
                <div className="movie-title">
                    <h1> {movieDetails?.original_title} </h1>
                </div>
                <div className="movie-others-info">
                    <div className="movie-released-info">
                        <span className="release-date">{movieDetails?.release_date}</span>
                        <span className="language">{movieDetails?.original_language}</span>
                        <span className="status">{movieDetails?.status}</span>
                    </div>
                    <div className="movie-popularity-info">
                        <div className="rating-section">
                            <span className="rating-title">RATING</span>
                            <span className="rating-value">{movieDetails?.vote_average}/10</span>
                            <span className="vote-count">{movieDetails?.vote_count}</span>
                        </div>
                        <div className="popularity-section">
                            <span className="popularity-title">POPULARITY</span>
                            <span className="popularity-value">{movieDetails?.popularity}</span>
                        </div>
                    </div>
                </div>
                {moviePoster && (
                    <div className="poster-section">
                        <img className="poster-image" src={moviePoster} alt="poster" />
                    </div>
                )}
                <div className="genre-list">
                    {movieDetails &&
                        movieDetails?.genres.map(genreItem => {
                            return (
                                <div key={genreItem.id} className="genre-list-item">
                                    {genreItem.name}
                                </div>
                            );
                        })}
                </div>
                <div className="movie-overview">{movieDetails?.overview}</div>
                <div className="watch-on-imdb">
                    <a
                        href={`https://www.imdb.com/title/${movieDetails?.imdb_id}/?ref_=helpms_ih_gi_link`}
                        target="_blank"
                        rel="noreferrer">
                        <img src={IMDBLink} alt="imdb-icon" />
                    </a>
                </div>
            </>
        );
    };

    const GetMovieDetailsCastCrewInfoUIElement = (): JSX.Element => {
        return (
            <div className="movie-cast-crew-section container">
                {isGetMovieCastCrewDataError ? (
                    <div className="error-message"> No Cast Crew found.</div>
                ) : (
                    <div className="movie-cast-crew-main-content">
                        <div className="movie-cast-container">
                            {isGetMovieCastDataError ? (
                                <div className="error-message"> No Cast found.</div>
                            ) : (
                                <>
                                    <h2 className="top-cast-title">Top Cast</h2>
                                    <div className="cast-list">
                                        {movieCastData?.map((item, index) => {
                                            return <MovieCast key={index} castItem={item} />;
                                        })}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="movie-crew-container">
                            {isGetMovieCrewDataError ? (
                                <div className="error-message"> No Crew found.</div>
                            ) : (
                                <>
                                    <h2 className="top-crew-title">Top Crew</h2>
                                    <div className="crew-list">
                                        {movieCrewData?.map((item, index) => {
                                            return <MovieCrew key={index} crewItem={item} />;
                                        })}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const GetMovieDetailsRelatedMovieUIElement = (): JSX.Element => {
        return isRelatedMoviesError ? (
            <div className="error-message"> No Related movie found.</div>
        ) : (
            <>
                <h2 className="related-movies-title">Related Movies</h2>
                <div className="related-movies">
                    {relatedMovies &&
                        relatedMovies.map(item => {
                            return (
                                <div key={item.id} className="movie-grid-item">
                                    <MovieGridItem movies={item} />
                                </div>
                            );
                        })}
                </div>
            </>
        );
    };

    useEffect(() => {
        FetchRelatedMovieDetailsInfoAsync(Number(movieId))
            .then((relatedMovieDetailsResponse: MoviesData) => {
                console.log('Related Movie Details:-', relatedMovieDetailsResponse);
                if (relatedMovieDetailsResponse.results.length > 0)
                    setRelatedMovies(relatedMovieDetailsResponse.results);
                else setIsRelatedMoviesError(true);
            })
            .catch(error => {
                console.log('Related Movie Error:-', error);
                setIsRelatedMoviesError(true);
            });
    }, []);

    // Get Movie Cast Crew Data
    useEffect(() => {
        FetchMovieCastCrewInfoAsync(Number(movieId))
            .then((movieCastCrewDataResponse: MovieCastCrewData) => {
                if (movieCastCrewDataResponse.cast.length > 0) setMovieCastData(movieCastCrewDataResponse.cast);
                else setIsGetMovieCastDataError(true);
                if (movieCastCrewDataResponse.crew.length > 0) setMovieCrewData(movieCastCrewDataResponse.crew);
                else setIsGetMovieCrewDataError(true);
            })
            .catch(error => {
                console.log('Related Movie Error:-', error);
                setIsGetMovieCastCrewDataError(true);
            });
    }, []);

    useEffect(() => {
        FetchMovieDetailsInfoAsync(Number(movieId))
            .then((movieDetailsResponse: MoveDetailsData) => {
                console.log('Movie Details:-', movieDetailsResponse);
                setMovieDetails(movieDetailsResponse);
                if (movieDetailsResponse.poster_path)
                    setMoviePoster(`https://image.tmdb.org/t/p/w220_and_h330_face${movieDetailsResponse.poster_path}`);
            })
            .catch(error => {
                console.log('Movie Details error:-', error);
                setIsGetMovieDetailsError(true);
            });
    }, [moviePoster]);

    return (
        <div className="container movie-details-container">
            <div className="selected-movie-details-container">
                {GetMovieDetailsBasicInfoUIElement()} {GetMovieDetailsCastCrewInfoUIElement()}
            </div>
            {GetMovieDetailsRelatedMovieUIElement()}
        </div>
    );
};

export default MovieDetails;
