import React, { useEffect, useState } from 'react';
import { GetWatchListMovies } from '../../db/WatchList';
import { MovieDetailsData } from '../../data_model/movies/MoviesData';
import './_watchList.scss';
import MovieWatchListItem from '../../componenets/movie_watch_list_item/MovieWatchListItem';

const Watchlist: React.FC = () => {
    const [watchedListMovie, setWatchedListMovie] = useState<MovieDetailsData[]>();

    useEffect(() => {
        GetWatchListMovies().then(result => {
            setWatchedListMovie(result);
        });
    }, []);
    return (
        <div className="watch-list-container container">
            {watchedListMovie && watchedListMovie?.length > 0 ? (
                <>
                    <div className="title-section">
                        <h1>Your WatchList</h1>
                    </div>
                    {watchedListMovie?.map((movieItem, index) => {
                        return <MovieWatchListItem key={index} movieDetails={movieItem} />;
                    })}
                </>
            ) : (
                <div className="error-message"> Currently there is no Movie in the watch list. </div>
            )}
        </div>
    );
};

export default Watchlist;
