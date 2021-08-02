import React, { useEffect, useState } from 'react';
import { FaHeart, FaPlus, FaBookmark, FaCheck } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { MovieItem } from '../../../data_model/commonData/MovieItem';
import DefaultPoster from '../../../assets/images/deafult-poster.jpg';
import { Link } from 'react-router-dom';
import { MovieDetailsData } from '../../../data_model/movies/MoviesData';
import MoviesService from '../../../services/movies/MoviesService';
import { cid, useInject } from 'inversify-hooks';
import {
    AddSingleMovieItem,
    GetTotalAddedWatchedListFromIndexDB,
    GetWatchListMovies,
    RemoveMovieFromWatchList,
} from '../../../db/WatchList';
import { useDispatch } from 'react-redux';
import { SetTotalAddedWatchedListToStore } from '../../../state/movies/MoviesAction';

interface MovieGridItemProps {
    movies: MovieItem;
}

const MovieGridItem: React.FC<MovieGridItemProps> = (movieGridItemprops: MovieGridItemProps) => {
    const [moviesService] = useInject<MoviesService>(cid.MoviesService);
    const dispatch = useDispatch();
    const [isAddedWatchedList, setIsAddedWatchedList] = useState<boolean>(false);

    const FetchMovieDetailsInfoAsync = (movieID: number): Promise<MovieDetailsData> => {
        return moviesService.getMovieDetails(movieID);
    };

    const SetTotalAddedWatchedList = () => {
        GetTotalAddedWatchedListFromIndexDB().then(result => {
            if (result) dispatch(SetTotalAddedWatchedListToStore(result));
        });
    };

    const AddRemoveToMyWatchList = () => {
        if (!isAddedWatchedList)
            FetchMovieDetailsInfoAsync(movieGridItemprops.movies.id)
                .then((movieDetailsResponse: MovieDetailsData) => {
                    setIsAddedWatchedList(true);
                    AddSingleMovieItem(movieDetailsResponse);
                    SetTotalAddedWatchedList();
                })
                .catch(error => {
                    console.log('Related Movie Error:-', error);
                });
        else {
            setIsAddedWatchedList(false);
            RemoveMovieFromWatchList(movieGridItemprops.movies.id);
            SetTotalAddedWatchedList();
        }
    };

    useEffect(() => {
        GetWatchListMovies().then(result => {
            const getMovieFromIndexDB = result?.filter(movieItem => movieItem.id === movieGridItemprops.movies.id);
            if (getMovieFromIndexDB && getMovieFromIndexDB?.length > 0) setIsAddedWatchedList(true);
            else setIsAddedWatchedList(false);
        });
    }, []);

    useEffect(() => {
        SetTotalAddedWatchedList();
    }, []);

    return (
        <div className="movie-inner-content">
            <button className="add-to-my-watch-list" type="button" onClick={() => AddRemoveToMyWatchList()}>
                <IconContext.Provider
                    value={isAddedWatchedList ? { className: 'idb-icon-active' } : { className: 'idb-icon-inactive' }}>
                    <div>
                        <FaBookmark />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider
                    value={isAddedWatchedList ? { className: 'check-mark-icon' } : { className: 'plus-icon' }}>
                    <div>{isAddedWatchedList ? <FaCheck /> : <FaPlus />}</div>
                </IconContext.Provider>
            </button>
            <Link className="genre-name" to={`/movies/${movieGridItemprops.movies.id}`}>
                <img
                    className="poster-image"
                    src={
                        !movieGridItemprops.movies.poster_path || movieGridItemprops.movies.poster_path == null
                            ? DefaultPoster
                            : `https://image.tmdb.org/t/p/w220_and_h330_face${movieGridItemprops.movies.poster_path}`
                    }
                    alt="poster"
                />
            </Link>
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
